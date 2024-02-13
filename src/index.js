const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cron = require('node-cron');

// Express App Initialization
const app = express();
const PORT = process.env.PORT;
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware for token verification
const verifyToken = (req, res, next) => {
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1];
		jwt.verify(bearerToken, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				return res.sendStatus(403); // Invalid token
			} else {
				// Token is valid, but not using decoded data here
				next();
			}
		});
	} else {
		// Forbidden
		res.sendStatus(403);
	}
};

// firebase admin initialization
const admin = require('firebase-admin');

// const serviceAccount = require('../serviceAccount.json');
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_JSON);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

// ***********************VISITOR***********************//

// Login

app.post('/login', async (req, res) => {
	try {
		// Extract the ID token from the request
		const { token } = req.body;

		// Verify the ID token and decode its payload
		const decodedToken = await admin.auth().verifyIdToken(token);

		// Extract user info from the decoded token
		const { name, email, picture } = decodedToken;

		// Check if the user already exists in the database
		let user = await prisma.user.findUnique({
			where: { email: email },
		});

		// If user doesn't exist, create a new user
		if (!user) {
			user = await prisma.user.create({
				data: {
					name: name,
					email: email,
					photoUrl: picture, // Ensure this matches the column name in your database
				},
			});
		}

		// Generate a token for your own application if needed
		const appToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

		// Return a success response with the user information and token
		res.json({
			error: false,
			message: 'User logged in successfully',
			user: {
				id: user.id,
				name: user.name,
			},
			token: appToken,
		});
	} catch (error) {
		console.error('Error in user login:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Select Role
app.patch('/users/:id/select-role', verifyToken, async (req, res) => {
	try {
		// Extracting the user ID and selected role from the request body
		const id = req.params.id;
		const { selectedRole } = req.body;

		// Validate the selected role
		const validRoles = ['Admin', 'PendingMentor', 'Mentor', 'Mentee'];
		if (!validRoles.includes(selectedRole)) {
			return res.status(400).json({ error: true, message: 'Invalid role selected' });
		}

		await prisma.user.update({
			where: { id: id },
			data: { userType: selectedRole },
		});

		// Return success response
		res.json({
			error: false,
			message: 'Role selected successfully',
		});
	} catch (error) {
		console.error('Error selecting role:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// ***********************MENTEE***********************//

// Update Profile
app.patch('/users/mentee/:id/profile', verifyToken, async (req, res) => {
	try {
		const id = req.params.id;
		const { job, school, skills, location, about } = req.body;

		// Check if the user exists
		const existingUser = await prisma.user.findUnique({
			where: { id: id },
		});

		if (!existingUser) {
			return res.status(404).json({ error: true, message: 'User not found' });
		}

		// Update user information
		await prisma.user.update({
			where: { id: id },
			data: {
				skills: skills,
				location: location,
				about: about,
			},
		});

		// Create a new Experience entry if job or school is provided
		if (job || school) {
			await prisma.experience.create({
				data: {
					// Assuming jobTitle for job and company for school, adjust as needed
					jobTitle: job,
					company: school,
					userId: id, // Link to the user
					isCurrentJob: true, // Assuming this is a current position/schooling
				},
			});
		}

		// Return the updated user information - without the new experience details
		res.json({
			error: false,
			message: 'User profile updated successfully',
		});
	} catch (error) {
		console.error('Error updating user profile:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// filter class mentor by education level and category
app.get('/class/filter-mentors', async (req, res) => {
	try {
		// Mengambil query parameters untuk education level dan category
		const { educationLevel, category } = req.query;

		// Mencari mentor yang sesuai dengan filter
		const mentors = await prisma.user.findMany({
			where: {
				userType: 'Mentor',
				// Jika tidak ada parameter yang diberikan, pastikan mentor memiliki setidaknya satu kelas yang terverifikasi
				class: {
					isVerified: true,
					...(educationLevel && { educationLevel: educationLevel }),
					...(category && { category: category }),
				},
			},
			include: {
				class: {
					where: {
						isVerified: true, // Include hanya kelas yang terverifikasi
					},
				}, // Assuming 'class' is the correct relation name
				mentorReviews: true,
				experiences: true,
			},
		});

		// Mengembalikan response sukses dengan list mentor yang difilter
		res.json({
			error: false,
			message: 'Filtered mentors fetched successfully',
			mentors: mentors,
		});
	} catch (error) {
		console.error('Error fetching filtered mentors:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// filter session mentor by category
app.get('/session/filter-mentors', async (req, res) => {
	try {
		const { category } = req.query;

		const mentors = await prisma.user.findMany({
			where: {
				userType: 'Mentor',
				// Jika category disediakan, filter berdasarkan category; jika tidak, pastikan mentor memiliki setidaknya satu session
				...(category
					? {
							session: {
								some: {
									category: category,
								},
							},
					  }
					: {
							session: {
								some: {},
							},
					  }),
			},
			include: {
				session: {
					include: {
						participant: true, // Menyertakan data Participant untuk setiap Session
					},
				},
				experiences: true,
			},
		});

		res.json({
			error: false,
			message: 'Filtered mentors fetched successfully',
			mentors: mentors,
		});
	} catch (error) {
		console.error('Error fetching filtered mentors:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// ***********************MENTOR***********************//

// Register as Mentor
app.patch('/users/mentor/:id/register', verifyToken, async (req, res) => {
	try {
		// Extract the mentor details from the request body
		const userId = req.params.id;
		const { gender, job, company, location, skills, linkedin, portofolio, experiences, about } =
			req.body;

		// Check if the user exists
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!existingUser) {
			return res.status(404).json({ error: true, message: 'User not found' });
		}

		// update mentor information
		const user = await prisma.user.update({
			where: { id: userId },
			data: {
				userType: 'PendingMentor',
				gender: gender,
				location: location,
				skills: skills,
				linkedin: linkedin,
				portofolio: portofolio,
				about: about,
			},
		});

		// Create a new Experience entry if job or company is provided
		if (job || company) {
			await prisma.experience.create({
				data: {
					// Assuming jobTitle for job and company for company, adjust as needed
					jobTitle: job,
					company: company,
					userId: userId, // Link to the user
					isCurrentJob: true, // Assuming this is a current position
				},
			});
		}

		// create a new experience from the experiences array
		if (experiences && experiences.length > 0) {
			await prisma.experience.createMany({
				data: experiences.map((experience) => {
					return {
						jobTitle: experience.role,
						company: experience.company,
						userId: userId,
						isCurrentJob: false,
					};
				}),
			});
		}

		// Return the new mentor information
		res.json({
			error: false,
			message: 'Mentor registered successfully',
		});
	} catch (error) {
		console.error('Error registering mentor:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// ? CLASSES

// Function to generate a unique 3-digit code
const generateUniqueCode = () => {
	// Generate a number between 100 and 999
	return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};

// Create Class
app.post('/class', verifyToken, async (req, res) => {
	try {
		// Extract the class details from the request body
		const { mentorId, educationLevel, category, name, description, terms, price, durationInDays } =
			req.body;

		// Create a new class
		const newClass = await prisma.class.create({
			data: {
				user: { connect: { id: mentorId } },
				educationLevel: educationLevel,
				category: category,
				name: name,
				description: description,
				terms: terms,
				price: price,
				durationInDays: durationInDays,
			},
		});

		// Return the new class information

		res.json({
			error: false,
			message: 'Class created successfully',
		});
	} catch (error) {
		console.error('Error creating class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get All Classes
app.get('/class/all', verifyToken, async (req, res) => {
	try {
		// Fetch all classes
		const classes = await prisma.class.findMany({
			include: {
				evaluations: true,
				transactions: true,
			},
		});

		res.json({
			error: false,
			message: 'Classes fetched successfully',
			classes: classes,
		});
	} catch (error) {
		console.error('Error fetching classes:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get Active Classes with no Zoom Link
app.get('/class/active', async (req, res) => {
	try {
		// Menggunakan Prisma untuk query data
		const activeClasses = await prisma.class.findMany({
			where: {
				isActive: true, // Filter hanya kelas yang aktif
				// Filter kelas yang tidak memiliki linkZoom
				NOT: {
					zoomLink: {
						not: null,
					},
				},
			},
			select: {
				name: true, // Nama kelas
				durationInDays: true, // Durasi kelas
				user: {
					// Informasi mentor
					select: {
						name: true, // Nama mentor
						photoUrl: true, // URL foto mentor
					},
				},
				transactions: {
					select: {
						User: {
							select: {
								name: true, // Nama mentee
							},
						},
					},
				},
			},
		});

		// Mengembalikan response dengan data kelas yang aktif
		res.json({
			error: false,
			message: 'Active classes fetched successfully',
			classes: activeClasses,
		});
	} catch (error) {
		console.error('Error fetching active classes:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get Class by ID
app.get('/class/:id', verifyToken, async (req, res) => {
	try {
		// Fetch the class by ID
		const classId = req.params.id;
		const classDetails = await prisma.class.findUnique({
			where: { id: classId },
			include: {
				evaluations: true,
				transactions: true,
			},
		});

		res.json({
			error: false,
			message: 'Class fetched successfully',
			class: classDetails,
		});
	} catch (error) {
		console.error('Error fetching class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

//  booking a class
app.post('/class/:id/book', async (req, res) => {
	try {
		const classId = req.params.id;
		const { userId } = req.body;

		// Transaction to ensure atomicity of the booking process
		const newBooking = await prisma.$transaction(async (prisma) => {
			const existingClass = await prisma.class.findUnique({ where: { id: classId } });
			if (!existingClass || !existingClass.isAvailable) {
				throw new Error('Class not available for booking');
			}

			const existingUser = await prisma.user.findUnique({ where: { id: userId } });
			if (!existingUser) {
				throw new Error('User not found');
			}

			let uniqueCode = generateUniqueCode();
			let isUnique = false;
			while (!isUnique) {
				const existingTransaction = await prisma.transaction.findUnique({ where: { uniqueCode } });
				if (existingTransaction) {
					uniqueCode = generateUniqueCode();
				} else {
					isUnique = true;
				}
			}

			await prisma.class.update({ where: { id: classId }, data: { isAvailable: false } });

			return prisma.transaction.create({
				data: {
					classId,
					userId,
					uniqueCode,
					expired: new Date(Date.now() + 60 * 1000), // 60*1000 milliseconds = 1 minute
				},
			});
		});

		res.json({ error: false, message: 'Class booked successfully', booking: newBooking });
	} catch (error) {
		console.error('Error booking class:', error);
		res.status(500).json({ error: true, message: error.message || 'Internal server error' });
	}
});

cron.schedule('*/1 * * * *', async () => {
	// Runs every minute
	console.log('Checking for transactions to expire...');
	await expireTransactions();
	// Add call to updateClassAvailability if implemented
});

async function expireTransactions() {
	const now = new Date();
	// First, find transactions that should be expired
	const transactionsToExpire = await prisma.transaction.findMany({
		where: {
			expired: { lt: now },
			paymentStatus: { notIn: ['Expired', 'Approved'] },
		},
		select: {
			id: true, // Select only the id and classId to minimize data transfer
			classId: true,
		},
	});

	// If there are transactions to expire, process them
	if (transactionsToExpire.length > 0) {
		// Update the transactions to 'Expired'
		await prisma.transaction.updateMany({
			where: {
				id: { in: transactionsToExpire.map((t) => t.id) },
			},
			data: { paymentStatus: 'Expired' },
		});

		// Make the associated classes available again
		// This logic assumes one transaction can block a class, adjust as necessary for your logic
		for (const { classId } of transactionsToExpire) {
			await prisma.class.update({
				where: { id: classId },
				data: { isAvailable: true },
			});
		}

		console.log(
			`Processed and expired ${transactionsToExpire.length} transactions, associated classes made available.`
		);
	} else {
		console.log('No transactions to expire at this time.');
	}
}

// add review to mentor
app.patch('/class/:id/review', verifyToken, async (req, res) => {
	try {
		// Extract the class ID and review details from the request body
		const classId = req.params.id;
		const { userId, review } = req.body;

		// Check if the class exists
		const existingClass = await prisma.class.findUnique({
			where: { id: classId },
		});

		if (!existingClass) {
			return res.status(404).json({ error: true, message: 'Class not found' });
		}

		// Check if the user exists
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!existingUser) {
			return res.status(404).json({ error: true, message: 'User not found' });
		}

		// Add the review to user's model
		const newReview = await prisma.user.update({
			data: {
				classId: classId,
				userId: userId,
				review: review,
			},
		});

		// Return success response with the new review information
		res.json({
			error: false,
			message: 'Review added successfully',
			review: newReview,
		});
	} catch (error) {
		console.error('Error adding review to class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// ? SESSION

// Create Session
app.post('/sessions', verifyToken, async (req, res) => {
	try {
		// Extract the session details from the request body
		const { mentorId, title, description, dateTime, startTime, endTime, maxParticipants } =
			req.body;

		// Create a new session
		const newSession = await prisma.session.create({
			data: {
				mentor: { connect: { id: mentorId } },
				title: title,
				description: description,
				dateTime: dateTime,
				startTime: startTime,
				endTime: endTime,
				maxParticipants: maxParticipants,
			},
		});

		// Return the new session information
		res.json({
			error: false,
			message: 'Session created successfully',
			session: newSession,
		});
	} catch (error) {
		console.error('Error creating session:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get All Sessions
app.get('/sessions', verifyToken, async (req, res) => {
	try {
		// Fetch all sessions
		const sessions = await prisma.session.findMany({
			include: {
				participant: true,
			},
		});

		res.json({
			error: false,
			message: 'Sessions fetched successfully',
			sessions: sessions,
		});
	} catch (error) {
		console.error('Error fetching sessions:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get Session by ID
app.get('/sessions/:id', verifyToken, async (req, res) => {
	try {
		// Fetch the session by ID
		const sessionId = req.params.id;
		const sessionDetails = await prisma.session.findUnique({
			where: { id: sessionId },
			include: {
				participant: true,
			},
		});

		res.json({
			error: false,
			message: 'Session fetched successfully',
			session: sessionDetails,
		});
	} catch (error) {
		console.error('Error fetching session:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// book a session
app.post('/sessions/:id/book', verifyToken, async (req, res) => {
	try {
		// Extract the session ID and user ID from the request body
		const { sessionId, userId } = req.body;

		// Check if the session exists
		const existingSession = await prisma.session.findUnique({
			where: { id: sessionId },
		});

		if (!existingSession) {
			return res.status(404).json({ error: true, message: 'Session not found' });
		}

		// Check if the user exists
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!existingUser) {
			return res.status(404).json({ error: true, message: 'User not found' });
		}

		// Book the session
		const newBooking = await prisma.participant.create({
			data: {
				sessionId: sessionId,
				userId: userId,
			},
		});

		// Return success response with the new booking information
		res.json({
			error: false,
			message: 'Session booked successfully',
			booking: newBooking,
		});
	} catch (error) {
		console.error('Error booking session:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Create Evaluation
app.post('/class/:id/evaluation', verifyToken, async (req, res) => {
	try {
		// Extract the evaluation details from the request body
		const classId = req.params.id;
		const { topic, link } = req.body;

		// Create a new evaluation
		const newEvaluation = await prisma.evaluation.create({
			data: {
				class: { connect: { id: classId } },
				topic: topic,
				link: link,
			},
		});

		// Return the new evaluation information
		res.json({
			error: false,
			message: 'Evaluation created successfully',
			evaluation: newEvaluation,
		});
	} catch (error) {
		console.error('Error creating evaluation:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Send Feedback
app.post('/evaluation/:evaluationId/feedback', verifyToken, async (req, res) => {
	try {
		// Extract evaluationId and feedback from the request
		const { evaluationId } = req.params;
		const { feedback } = req.body;

		// Validate if the evaluation exists and if the current user is authorized to update it
		// This step is crucial to ensure that only the mentor who owns the evaluation can update it
		// Implementation of this validation depends on your application's logic

		// Update the evaluation with the feedback
		const updatedEvaluation = await prisma.evaluation.update({
			where: {
				id: evaluationId,
			},
			data: {
				feedback: feedback,
			},
		});

		// Return the updated evaluation information
		res.json({
			error: false,
			message: 'Feedback added successfully',
			evaluation: updatedEvaluation,
		});
	} catch (error) {
		console.error('Error adding feedback to evaluation:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// ***********************ADMIN***********************//

// verify mentor
app.patch('/admin/verify-mentor', verifyToken, async (req, res) => {
	try {
		// Extract the mentor ID from the request body
		const { mentorId } = req.body;

		// Check if the mentor exists
		const existingMentor = await prisma.user.findUnique({
			where: { id: mentorId },
		});

		if (!existingMentor) {
			return res.status(404).json({ error: true, message: 'Mentor not found' });
		}

		// Verify the mentor
		const updatedMentor = await prisma.user.update({
			where: { id: mentorId },
			data: { userType: 'Mentor' },
		});

		// Return success response with the updated mentor information
		res.json({
			error: false,
			message: 'Mentor verified successfully',
			mentor: updatedMentor,
		});
	} catch (error) {
		console.error('Error verifying mentor:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// verify class
app.patch('/admin/verify-class', verifyToken, async (req, res) => {
	try {
		// Extract the class ID from the
		const { classId } = req.body;

		// Check if the class exists
		const existingClass = await prisma.class.findUnique({
			where: { id: classId },
		});

		if (!existingClass) {
			return res.status(404).json({ error: true, message: 'Class not found' });
		}

		// Verify the class
		const updatedClass = await prisma.class.update({
			where: { id: classId },
			data: { isVerified: true },
		});

		// Return success response with the updated class information
		res.json({
			error: false,
			message: 'Class verified successfully',
			class: updatedClass,
		});
	} catch (error) {
		console.error('Error verifying class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// verify mentee transaction
app.patch('/admin/verify-transaction', verifyToken, async (req, res) => {
	try {
		// Extract the transaction ID from the request body
		const { transactionId } = req.body;

		// Check if the transaction exists
		const existingTransaction = await prisma.transaction.findUnique({
			where: { id: transactionId },
		});

		if (!existingTransaction) {
			return res.status(404).json({ error: true, message: 'Transaction not found' });
		}

		// Verify the transaction
		const updatedTransaction = await prisma.transaction.update({
			where: { id: transactionId },
			data: { paymentStatus: 'Approved' },
		});

		// Update the class to be active
		await prisma.class.update({
			where: { id: existingTransaction.classId },
			data: { isActive: true },
		});

		// Return success response with the updated transaction information
		res.json({
			error: false,
			message: 'Transaction verified successfully',
			transaction: updatedTransaction,
		});
	} catch (error) {
		console.error('Error verifying transaction:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// add zoom link to session
app.patch('/admin/add-zoom-link-session', verifyToken, async (req, res) => {
	try {
		// Extract the session ID and zoom link from the request body
		const { sessionId, zoomLink } = req.body;

		// Check if the session exists
		const existingSession = await prisma.session.findUnique({
			where: { id: sessionId },
		});

		if (!existingSession) {
			return res.status(404).json({ error: true, message: 'Session not found' });
		}

		// Add the zoom link to the session
		const updatedSession = await prisma.session.update({
			where: { id: sessionId },
			data: { zoomLink: zoomLink },
		});

		// Return success response with the updated session information
		res.json({
			error: false,
			message: 'Zoom link added successfully',
			session: updatedSession,
		});
	} catch (error) {
		console.error('Error adding zoom link to session:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// add zoom link to class
app.patch('/admin/add-zoom-link-class', verifyToken, async (req, res) => {
	try {
		// Extract the class ID and zoom link from the request body
		const { classId, zoomLink } = req.body;

		// Check if the class exists
		const existingClass = await prisma.class.findUnique({
			where: { id: classId },
		});

		if (!existingClass) {
			return res.status(404).json({ error: true, message: 'Class not found' });
		}

		// Add the zoom link to the class
		const updatedClass = await prisma.class.update({
			where: { id: classId },
			data: { zoomLink: zoomLink },
		});

		// Return success response with the updated class information
		res.json({
			error: false,
			message: 'Zoom link added successfully',
			class: updatedClass,
		});
	} catch (error) {
		console.error('Error adding zoom link to class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list all users
app.get('/users', async (req, res) => {
	try {
		// Mengambil semua data user dari database beserta relasi yang diinginkan
		const users = await prisma.user.findMany({
			include: {
				experiences: true,
				communities: true,
				class: true,
				session: true,
				participant: true,
				transactions: true,
			},
		});
		res.json({
			error: false,
			message: 'Users fetched successfully',
			users: users,
		});
	} catch (error) {
		console.error('Error fetching users:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list all mentors
app.get('/mentors', async (req, res) => {
	try {
		const mentors = await prisma.user.findMany({
			where: { userType: 'Mentor' },
			include: {
				communities: true,
				class: true,
				session: true,
				participant: true,
				transactions: true,
			},
		});

		res.json({
			error: false,
			message: 'Mentors fetched successfully',
			mentors: mentors,
		});
	} catch (error) {
		console.error('Error fetching mentors:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list all mentees
app.get('/mentees', async (req, res) => {
	try {
		const mentees = await prisma.user.findMany({
			where: { userType: 'Mentee' },
			include: {
				communities: true,
				class: true,
				session: true,
				participant: true,
				transactions: true,
				experiences: true,
			},
		});

		res.json({
			error: false,
			message: 'Mentees fetched successfully',
			mentees: mentees,
		});
	} catch (error) {
		console.error('Error fetching mentees:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// get user by id
app.get('/users/:id', async (req, res) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.params.id },
			include: {
				experiences: true,
				communities: true,
				class: true,
				session: true,
				participant: true,
				transactions: true,
			},
		});
		res.json({
			error: false,
			message: 'User fetched successfully',
			user: user,
		});
	} catch (error) {
		console.error('Error fetching user:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// get mentor by id
app.get('/mentors/:id', async (req, res) => {
	try {
		const user = await prisma.user.findMany({
			where: { id: req.params.id },
			include: {
				experiences: true,
				communities: true,
				class: true,
				session: true,
				participant: true,
				transactions: true,
				mentorReviews: true,
			},
		});
		res.json({
			error: false,
			message: 'User fetched successfully',
			user: user,
		});
	} catch (error) {
		console.error('Error fetching mentors:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// get mentee by id
app.get('/mentees/:id', async (req, res) => {
	try {
		const user = await prisma.user.findMany({
			where: { id: req.params.id },
			include: {
				experiences: true,
				communities: true,
				class: true,
				session: true,
				participant: true,
				transactions: true,
			},
		});
		res.json({
			error: false,
			message: 'User fetched successfully',
			user: user,
		});
	} catch (error) {
		console.error('Error fetching mentees:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// ? COMMUNITY

// Create Community

app.post('/admin/:id/create-community', verifyToken, async (req, res) => {
	try {
		// Extract the community details from the request body
		const userId = req.params.id;
		const { name, link, imageUrl } = req.body;

		// Create a new community
		const newCommunity = await prisma.community.create({
			data: {
				admin: { connect: { id: userId } },
				name: name,
				link: link,
				imageUrl: imageUrl,
			},
		});

		// Return the new community information
		res.json({
			error: false,
			message: 'Community created successfully',
			community: newCommunity,
		});
	} catch (error) {
		console.error('Error creating community:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get All Communities

app.get('/communities', verifyToken, async (req, res) => {
	try {
		// Fetch all communities
		const communities = await prisma.community.findMany();

		res.json({
			error: false,
			message: 'Communities fetched successfully',
			communities: communities,
		});
	} catch (error) {
		console.error('Error fetching communities:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// **************************END**********************//

// Landing page
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log('MentorMatch API running in port: ' + PORT);
});
