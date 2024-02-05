const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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

// *****VISITOR***** //

// Login User
app.post('/login', async (req, res) => {
	try {
		// Extracting name, email, and photoURL from the request body
		const { name, email, photoURL } = req.body;

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
					photoUrl: photoURL, // Ensure this matches the column name in your database
				},
			});
		}

		// Generate a token
		const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

		// Return a success response with the user information
		// Ensure that user object has all the required fields
		res.json({
			error: false,
			message: 'User logged in successfully',
			user: {
				id: user.id, // Ensure these are the correct fields as per your database
				name: user.name,
			},
			token: token,
		});
	} catch (error) {
		console.error('Error in user login:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Select Role
app.post('/select-role', verifyToken, async (req, res) => {
	try {
		// Extracting the user ID and selected role from the request body
		const { id, selectedRole } = req.body;

		// Validate the selected role
		const validRoles = ['Admin', 'PendingMentor', 'Mentor', 'Mentee'];
		if (!validRoles.includes(selectedRole)) {
			return res.status(400).json({ error: true, message: 'Invalid role selected' });
		}

		const updatedUser = await prisma.user.update({
			where: { id: id },
			data: { userType: selectedRole },
		});

		// Return success response with updated user information
		res.json({
			error: false,
			message: 'Role selected successfully',
			user: {
				id: updatedUser.id,
				email: updatedUser.email,
				userType: updatedUser.userType,
			},
		});
	} catch (error) {
		console.error('Error selecting role:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// *****MENTEE***** //

// Update Profile
app.patch('/mentee/update-profile', verifyToken, async (req, res) => {
	try {
		const { id, job, school, skills, location, about } = req.body;

		// Check if the user exists
		const existingUser = await prisma.user.findUnique({
			where: { id: id },
		});

		if (!existingUser) {
			return res.status(404).json({ error: true, message: 'User not found' });
		}

		// Update user information
		const updatedUser = await prisma.user.update({
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
			user: {
				id: updatedUser.id,
				email: updatedUser.email,
				name: updatedUser.name,
				skills: updatedUser.skills,
				location: updatedUser.location,
				about: updatedUser.about,
				// Note: job and school are not directly part of the User model response here
			},
		});
	} catch (error) {
		console.error('Error updating user profile:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// *****CLASSES***** //

// Function to generate a unique 3-digit code
const generateUniqueCode = () => {
	// Generate a number between 100 and 999
	return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};
// Create Class

app.post('/classes', verifyToken, async (req, res) => {
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
			class: newClass,
		});
	} catch (error) {
		console.error('Error creating class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get All Classes

app.get('/classes', verifyToken, async (req, res) => {
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

// Get Class by ID

app.get('/classes/:id', verifyToken, async (req, res) => {
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

// book a class

app.post('/classes/:id/book', verifyToken, async (req, res) => {
	try {
		const classId = req.params.id; // Assuming classId is passed as URL parameter
		const { userId } = req.body;

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

		// Attempt to generate a unique code
		let uniqueCode = generateUniqueCode();
		let isUnique = false;

		while (!isUnique) {
			const existingTransaction = await prisma.transaction.findUnique({
				where: { uniqueCode },
			});

			if (existingTransaction) {
				uniqueCode = generateUniqueCode(); // Regenerate the code if not unique
			} else {
				isUnique = true; // Unique code found
			}
		}

		// Calculate the total amount to be paid, incorporating the uniqueCode if necessary
		let totalAmount = existingClass.price + uniqueCode; // Example: Adding uniqueCode directly to the price

		// Book the class with the unique code
		const newBooking = await prisma.transaction.create({
			data: {
				classId: classId,
				userId: userId,
				uniqueCode: uniqueCode, // Use the generated unique code
				// Assume other necessary fields are added here
			},
		});

		// Return success response with the new booking information, including total amount
		res.json({
			error: false,
			message: 'Class booked successfully',
			booking: newBooking,
			totalAmount: totalAmount, // Total amount including the uniqueCode
		});
	} catch (error) {
		console.error('Error booking class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// *****SESSION***** //

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

// *****MENTOR***** //

// Register as Mentor

app.patch('/mentor/:id/register', verifyToken, async (req, res) => {
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
			user: user,
		});
	} catch (error) {
		console.error('Error registering mentor:', error);
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


// *****COMMUNITY***** //

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

// list all users
app.get('/users', async (req, res) => {
	try {
		// Mengambil semua data user dari database beserta relasi yang diinginkan
		const users = await prisma.user.findMany({
			include: {
				experiences: true,
				communities: true,
				classes: true,
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
				classes: true,
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
				classes: true,
				session: true,
				participant: true,
				transactions: true,
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
				classes: true,
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

// list mentors by id
app.get('/mentors/:id', async (req, res) => {
	try {
		const user = await prisma.user.findMany({
			where: { id: req.params.id },
			include: {
				experiences: true,
				communities: true,
				classes: true,
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
		console.error('Error fetching mentors:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list mentees by id
app.get('/mentees/:id', async (req, res) => {
	try {
		const user = await prisma.user.findMany({
			where: { id: req.params.id },
			include: {
				experiences: true,
				communities: true,
				classes: true,
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

// list all communities
app.get('/communities', async (req, res) => {
	try {
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

// list all sessions
app.get('/sessions', async (req, res) => {
	try {
		const sessions = await prisma.session.findMany();
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

// list all classes
app.get('/classes', async (req, res) => {
	try {
		const classes = await prisma.classes.findMany();
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

// Landing page
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// add mentor manually to database
app.listen(PORT, () => {
	console.log('MentorMatch API running in port: ' + PORT);
});
