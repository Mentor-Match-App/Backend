const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cron = require('node-cron');
const { DateTime } = require('luxon');

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

const serviceAccount = require('../serviceAccount.json');

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
					photoUrl: picture,
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
				email: user.email,
				photoUrl: user.photoUrl,
				userType: user.userType,
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

// filter class mentor by education level and category
app.get('/class/filter-mentors', async (req, res) => {
	try {
		// Mengambil query parameters untuk education level dan category
		const { educationLevel, category } = req.query;

		// Setelah mendapatkan data mentors dari Prisma
		const mentors = await prisma.user.findMany({
			where: {
				userType: 'Mentor',
				class: {
					every: {
						startDate: {
							gt: new Date(),
						},
					},
					some: {
						isVerified: true,
						...(educationLevel && { educationLevel: educationLevel }),
						...(category && { category: category }),
					},
				},
			},
			include: {
				class: {
					where: {
						isVerified: true,
					},
					include: {
						transactions: true,
					},
				},
				mentorReviews: {
					include: {
						reviewer: {
							select: {
								name: true,
							},
						},
					},
				},
				experiences: true,
			},
		});

		// Menyesuaikan struktur data mentors untuk mengubah `reviewer` menjadi string
		const adjustedMentors = mentors.map((mentor) => {
			const mentorReviewsAdjusted = mentor.mentorReviews.map((review) => {
				return {
					...review,
					reviewer: review.reviewer.name, // Mengubah `reviewer` menjadi string nama
				};
			});

			return {
				...mentor,
				mentorReviews: mentorReviewsAdjusted,
			};
		});

		// Mengembalikan response sukses dengan list mentor yang disesuaikan
		res.json({
			error: false,
			message: 'Filtered mentors fetched successfully',
			mentors: adjustedMentors,
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

// get mentee profile
app.get('/mentees/:id/profile', async (req, res) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.params.id },
			include: {
				experiences: true,
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

// ***********************MENTOR***********************//

// Register as Mentor
app.patch('/users/mentor/:id/register', verifyToken, async (req, res) => {
	try {
		// Extract the mentor details from the request body
		const userId = req.params.id;
		const {
			gender,
			job,
			company,
			location,
			skills,
			linkedin,
			portofolio,
			experiences,
			about,
			accountNumber,
			accountName,
		} = req.body;

		// Check if the user exists
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!existingUser) {
			return res.status(404).json({ error: true, message: 'User not found' });
		}

		// update mentor information
		await prisma.user.update({
			where: { id: userId },
			data: {
				userType: 'PendingMentor',
				gender: gender,
				location: location,
				skills: skills,
				linkedin: linkedin,
				portofolio: portofolio,
				about: about,
				accountNumber: accountNumber,
				accountName: accountName,
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

// get mentor profile
app.get('/mentors/:id/profile', async (req, res) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.params.id },
			include: {
				experiences: true,
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

// Update Profile Mentor
app.patch('/mentors/:id/profile', verifyToken, async (req, res) => {
	try {
		const id = req.params.id;
		const { job, company, skills, location, about, linkedin, experiences } = req.body;

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
				linkedin: linkedin,
			},
		});

		// Update the current job if job or company is provided
		if (job || company) {
			await prisma.experience.updateMany({
				where: {
					userId: id,
					isCurrentJob: true,
				},
				data: {
					jobTitle: job,
					company: company,
				},
			});
		}

		// Update the experiences from the experiences array
		if (experiences && experiences.length > 0) {
			await prisma.experience.deleteMany({
				where: {
					userId: id,
					isCurrentJob: false,
				},
			});

			await prisma.experience.createMany({
				data: experiences.map((experience) => {
					return {
						jobTitle: experience.role,
						company: experience.experienceCompany,
						userId: id,
						isCurrentJob: false,
					};
				}),
			});
		}

		// Return the updated user information
		res.json({
			error: false,
			message: 'User profile updated successfully',
		});
	} catch (error) {
		console.error('Error updating user profile:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

app.patch('/mentees/:id/profile', verifyToken, async (req, res) => {
	try {
		const id = req.params.id;
		const { job, company, skills, location, about, linkedin, experiences } = req.body;

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
				linkedin: linkedin,
			},
		});

		// Check if there is any current job
		const currentJobExists = await prisma.experience.findFirst({
			where: {
				userId: id,
				isCurrentJob: true,
			},
		});

		if (job || company) {
			if (currentJobExists) {
				await prisma.experience.updateMany({
					where: {
						userId: id,
						isCurrentJob: true,
					},
					data: {
						jobTitle: job,
						company: company,
					},
				});
			} else {
				// Create new current job experience if it doesn't exist
				//
				await prisma.experience.create({
					data: {
						jobTitle: job,
						company: company,
						userId: id,
						isCurrentJob: true,
					},
				});
			}
		}

		// Update the experiences from the experiences array
		if (experiences && experiences.length > 0) {
			await prisma.experience.deleteMany({
				where: {
					userId: id,
					isCurrentJob: false,
				},
			});

			await prisma.experience.createMany({
				data: experiences.map((experience) => {
					return {
						jobTitle: experience.role,
						company: experience.experienceCompany,
						userId: id,
						isCurrentJob: false,
					};
				}),
			});
		}

		// Return the updated user information
		res.json({
			error: false,
			message: 'User profile updated successfully',
		});
	} catch (error) {
		console.error('Error updating user profile:', error);
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
app.post('/mentor/:id/class', async (req, res) => {
	try {
		// Extract the class details from the request body
		const mentorId = req.params.id;
		const {
			educationLevel,
			category,
			name,
			description,
			terms,
			targetLearning,
			price,
			durationInDays,
			startDate,
			endDate,
			schedule,
			address,
			location,
			maxParticipants,
		} = req.body;

		const existingMentor = await prisma.user.findUnique({
			where: { id: mentorId },
		});

		if (!existingMentor) {
			return res.status(404).json({ error: true, message: 'Mentor not found' });
		}
		// Create a new class
		await prisma.class.create({
			data: {
				mentor: { connect: { id: mentorId } },
				educationLevel: educationLevel,
				category: category,
				name: name,
				description: description,
				terms: terms,
				price: price,
				durationInDays: durationInDays,
				startDate: DateTime.fromISO(startDate, { zone: 'UTC' }).setZone('Asia/Jakarta').toJSDate(),
				endDate: DateTime.fromISO(endDate, { zone: 'UTC' }).setZone('Asia/Jakarta').toJSDate(),
				schedule: schedule,
				address: address,
				location: location,
				maxParticipants: maxParticipants,
				targetLearning: targetLearning,
			},
		});

		res.json({
			error: false,
			message: 'Class created successfully',
		});
	} catch (error) {
		console.error('Error creating class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Edit Class
app.put('/class/:id', verifyToken, async (req, res) => {
	try {
		const classId = req.params.id;
		const {
			educationLevel,
			category,
			name,
			description,
			terms,
			targetLearning,
			price,
			durationInDays,
			startDate,
			endDate,
			schedule,
			address,
			location,
			maxParticipants,
		} = req.body;

		// Find the class by ID
		const existingClass = await prisma.class.findUnique({
			where: { id: classId },
		});

		if (!existingClass) {
			return res.status(404).json({ error: true, message: 'Class not found' });
		}

		// Update the class details
		const updatedClass = await prisma.class.update({
			where: { id: classId },
			data: {
				educationLevel: educationLevel,
				category: category,
				name: name,
				description: description,
				terms: terms,
				price: price,
				durationInDays: durationInDays,
				startDate: new Date(startDate),
				endDate: new Date(endDate),
				schedule: schedule,
				address: address,
				location: location,
				maxParticipants: maxParticipants,
				rejectReason: null, // Set rejectReason to null
			},
		});

		res.json({
			error: false,
			message: 'Class updated successfully',
			class: updatedClass,
		});
	} catch (error) {
		console.error('Error updating class:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

app.patch('/mentor/:id/class', async (req, res) => {
	try {
		// Extract the class details from the request body
		const mentorId = req.params.id;
		const {
			classId,
			educationLevel,
			category,
			name,
			description,
			terms,
			targetLearning,
			price,
			durationInDays,
			startDate,
			endDate,
			schedule,
			address,
			location,
			maxParticipants,
		} = req.body;

		const existingMentor = await prisma.user.findUnique({
			where: { id: mentorId },
		});

		if (!existingMentor) {
			return res.status(404).json({ error: true, message: 'Mentor not found' });
		}

		// Update the class
		await prisma.class.update({
			where: { id: classId },
			data: {
				educationLevel: educationLevel,
				category: category,
				name: name,
				description: description,
				terms: terms,
				price: price,
				durationInDays: durationInDays,
				startDate: new Date(startDate),
				endDate: new Date(endDate),
				schedule: schedule,
				address: address,
				location: location,
				maxParticipants: maxParticipants,
				targetLearning: targetLearning,
				isVerified: false,
				rejectReason: null,
			},
		});

		res.json({
			error: false,
			message: 'Class updated successfully',
		});
	} catch (error) {
		console.error('Error updating class:', error);
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
				learningMaterial: true,
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

		const newBooking = await prisma.$transaction(async (prisma) => {
			const existingClass = await prisma.class.findUnique({ where: { id: classId } });
			if (!existingClass) {
				throw new Error('Class not found');
			}

			if (!existingClass.isAvailable) {
				throw new Error('Class not available for booking');
			}

			const existingUser = await prisma.user.findUnique({ where: { id: userId } });
			if (!existingUser) {
				throw new Error('User not found');
			}

			// Mengecek apakah pengguna sudah memiliki transaksi untuk kelas ini
			const existingTransaction = await prisma.transaction.findFirst({
				where: {
					userId: userId,
					classId: classId,
					paymentStatus: { not: 'Expired' },
				},
			});

			// Menangani kasus berdasarkan status transaksi yang ditemukan
			if (existingTransaction) {
				if (existingTransaction.paymentStatus === 'Pending') {
					throw new Error('You already have a pending booking for this class');
				} else if (existingTransaction.paymentStatus === 'Approved') {
					throw new Error('You have already booked this class');
				}
			}

			const approvedBookingsCount = await prisma.transaction.count({
				where: {
					classId: classId,
					paymentStatus: 'Approved',
				},
			});

			const pendingBookingsCount = await prisma.transaction.count({
				where: {
					classId: classId,
					paymentStatus: 'Pending',
				},
			});

			const classCapacity = existingClass.maxParticipants;

			if (approvedBookingsCount + pendingBookingsCount >= classCapacity) {
				throw new Error('Class is fully booked');
			}

			let uniqueCode = generateUniqueCode();
			let isUnique = false;
			while (!isUnique) {
				const codeExists = await prisma.transaction.findUnique({ where: { uniqueCode } });
				if (codeExists) {
					uniqueCode = generateUniqueCode();
				} else {
					isUnique = true;
				}
			}

			// Jika jumlah peserta yang disetujui +1 sama dengan kapasitas, maka kelas tidak akan tersedia lagi
			if (approvedBookingsCount + 1 == classCapacity) {
				await prisma.class.update({ where: { id: classId }, data: { isAvailable: false } });
			}

			return prisma.transaction.create({
				data: {
					classId,
					userId,
					uniqueCode,
					// expired: new Date(Date.now() + 3 * 60 * 60 * 1000), // 60*1000 milliseconds = 1 menit
					// make expired 24 hours
					expired: new Date(Date.now() + 24 * 60 * 60 * 1000),
				},
			});
		});

		res.json({ error: false, message: 'Class booked successfully', booking: newBooking });
	} catch (error) {
		console.error('Error booking class:', error);
		// Menyesuaikan status response berdasarkan pesan error
		const statusCode = error.message.includes('pending') ? 409 : 400; // Contoh: 409 untuk konflik, 400 untuk permintaan buruk
		res.status(statusCode).json({ error: true, message: error.message || 'Internal server error' });
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
	const transactionsToExpire = await prisma.transaction.findMany({
		where: {
			expired: { lt: now },
			paymentStatus: { notIn: ['Expired', 'Approved'] },
		},
		select: {
			id: true,
			classId: true,
		},
	});

	if (transactionsToExpire.length > 0) {
		await prisma.transaction.updateMany({
			where: {
				id: { in: transactionsToExpire.map((t) => t.id) },
			},
			data: { paymentStatus: 'Expired' },
		});

		for (const { classId } of transactionsToExpire) {
			const approvedBookingsCount = await prisma.transaction.count({
				where: {
					classId: classId,
					paymentStatus: 'Approved',
				},
			});

			const existingClass = await prisma.class.findUnique({ where: { id: classId } });
			const classCapacity = existingClass.maxParticipants;

			if (approvedBookingsCount < classCapacity) {
				await prisma.class.update({
					where: { id: classId },
					data: { isAvailable: true },
				});
			}
		}

		console.log(
			`Processed and expired ${transactionsToExpire.length} transactions, associated classes updated.`
		);
	} else {
		console.log('No transactions to expire at this time.');
	}
}

// Update all classes status

async function updateAllClassesStatus() {
	const allClasses = await prisma.class.findMany({
		include: {
			transactions: true, // Mengambil semua transaksi tanpa filter
		},
	});

	const currentDate = new Date();

	for (const classInfo of allClasses) {
		// Filter transaksi untuk mendapatkan hanya yang "Approved"
		const approvedTransactions = classInfo.transactions.filter(
			(transaction) => transaction.paymentStatus === 'Approved'
		);

		// Kondisi 1: Ada transaksi Approved dan dalam periode startDate sampai endDate
		if (
			approvedTransactions.length > 0 &&
			currentDate >= classInfo.startDate &&
			currentDate <= classInfo.endDate
		) {
			await prisma.class.update({
				where: { id: classInfo.id },
				data: {
					isActive: true,
					isAvailable: false,
					// Tentukan nilai isVerified sesuai dengan kebutuhan
				},
			});
		}
		// Kondisi 2: Tidak ada transaksi Approved dan sudah lewat dari startDate
		else if (approvedTransactions.length === 0 && currentDate > classInfo.startDate) {
			await prisma.class.update({
				where: { id: classInfo.id },
				data: {
					isActive: false,
					isAvailable: false,
					isVerified: false,
				},
			});
		}
		// Kondisi 3: Ada transaksi Approved tetapi sudah lewat dari endDate
		else if (approvedTransactions.length > 0 && currentDate > classInfo.endDate) {
			await prisma.class.update({
				where: { id: classInfo.id },
				data: {
					isActive: false,
					isAvailable: false,
					// Tentukan nilai isVerified sesuai dengan kebutuhan
				},
			});
		}

		// Kondisi 4: jika jumlah transaksi yang disetujui + pending sama dengan kapasitas kelas maka kelas tidak tersedia lagi

		const pendingTransactions = classInfo.transactions.filter(
			(transaction) => transaction.paymentStatus === 'Pending'
		);

		if (approvedTransactions.length + pendingTransactions.length === classInfo.maxParticipants) {
			await prisma.class.update({
				where: { id: classInfo.id },
				data: {
					isAvailable: false,
				},
			});
		}

		// Kondisi 5: Jika End Date sudah lewat maka kelas tidak tersedia lagi

		if (currentDate > classInfo.endDate) {
			await prisma.class.update({
				where: { id: classInfo.id },
				data: {
					isAvailable: false,
				},
			});
		}
	}
}

// Memanggil fungsi untuk memperbarui semua kelas
setInterval(() => {
	updateAllClassesStatus()
		.then(() => console.log('Semua status kelas diperbarui.'))
		.catch((error) => console.error(error));
}, 5000); // 5000 milidetik = 5 detik

app.post('/mentee/:id/review', async (req, res) => {
	try {
		// Extract the class ID and review details from the request body
		const userId = req.params.id;
		const { mentorId, content } = req.body;

		// Check if the user exists
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!existingUser) {
			return res.status(404).json({ error: true, message: 'User not found' });
		}

		// Check if the mentor exists
		const existingMentor = await prisma.user.findUnique({
			where: { id: mentorId },
		});

		if (!existingMentor) {
			return res.status(404).json({ error: true, message: 'Mentor not found' });
		}

		// Add the review to the mentor
		const newReview = await prisma.review.create({
			data: {
				mentorId: mentorId,
				reviewerId: userId,
				content: content,
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
app.post('/mentor/:id/session', async (req, res) => {
	try {
		const mentorId = req.params.id;
		const { title, description, category, dateTime, startTime, endTime, maxParticipants } =
			req.body;

		// Konversi string ISO 8601 ke objek Date
		const parsedDateTime = new Date(dateTime);
		const parsedStartTime = new Date(startTime);
		const parsedEndTime = new Date(endTime);

		const session = await prisma.session.create({
			data: {
				mentor: { connect: { id: mentorId } },
				title: title,
				description: description,
				category: category,
				dateTime: parsedDateTime,
				startTime: parsedStartTime,
				endTime: parsedEndTime,
				maxParticipants: maxParticipants,
			},
		});

		res.json({
			error: false,
			message: 'Session created successfully',
			session: session, // Opsional: kirim balik session yang telah dibuat
		});
	} catch (error) {
		console.error('Error creating session:', error);

		// Pertimbangkan untuk menangani jenis error yang berbeda secara spesifik
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Get All Sessions
app.get('/session/all', verifyToken, async (req, res) => {
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
app.get('/session/:id', verifyToken, async (req, res) => {
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
app.post('/session/:id/book', async (req, res) => {
	try {
		// Extract the session ID and user ID from the request body
		const sessionId = req.params.id;
		const { userId } = req.body;

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

		// Check if the user has already booked the session
		const existingBooking = await prisma.participant.findUnique({
			where: {
				sessionId_userId: {
					sessionId: sessionId,
					userId: userId,
				},
			},
		});

		if (existingBooking) {
			return res.status(400).json({ error: true, message: 'User has already booked this session' });
		}

		// Check if the session is already full
		const participantCount = await prisma.participant.count({
			where: { sessionId: sessionId },
		});

		if (participantCount >= existingSession.maxParticipants) {
			return res.status(400).json({ error: true, message: 'Session is already full' });
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

// update all session status when datetime pass and  startTime is passed (session is started)

async function updateAllSessionStatus() {
	const allSessions = await prisma.session.findMany({});

	const currentDate = new Date();

	for (const sessionInfo of allSessions) {
		// update isActive to false if the session is started
		if (currentDate >= sessionInfo.startTime) {
			await prisma.session.update({
				where: { id: sessionInfo.id },
				data: {
					isActive: false,
				},
			});
		}
	}
}

// Memanggil fungsi untuk memperbarui semua sesi
setInterval(() => {
	updateAllSessionStatus()
		.then(() => console.log('Semua status sesi diperbarui.'))
		.catch((error) => console.error(error));
}, 5000); // 5000 milidetik = 5 detik

// Create Evaluation
app.post('/class/:id/evaluation', verifyToken, async (req, res) => {
	try {
		// Extract the evaluation details from the request body
		const classId = req.params.id;
		const { topic, link } = req.body;

		// Check if evaluation already exists for this topic
		const existingEvaluation = await prisma.evaluation.findFirst({
			where: {
				classId: classId,
				topic: topic,
			},
		});

		if (existingEvaluation) {
			return res.status(400).json({
				error: true,
				message: 'Evaluation with this topic already exists for this class',
				evaluation: existingEvaluation,
			});
		}

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

// Create Learning Material
app.post('/class/:id/learning-material', verifyToken, async (req, res) => {
	try {
		// Extract the learning material details from the request body
		const classId = req.params.id;
		const { title, link } = req.body;

		// Check if learning material already exists for this class
		const existingMaterial = await prisma.learningMaterial.findFirst({
			where: {
				classId: classId,
				title: title,
			},
		});

		if (existingMaterial) {
			return res.status(400).json({
				error: true,
				message: 'Learning material with this title already exists for this class',
				material: existingMaterial,
			});
		}

		// Create a new learning material
		const newMaterial = await prisma.learningMaterial.create({
			data: {
				class: { connect: { id: classId } },
				title: title,
				link: link,
			},
		});

		// Return the new learning material information
		res.json({
			error: false,
			message: 'Learning material created successfully',
			material: newMaterial,
		});
	} catch (error) {
		console.error('Error creating learning material:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Send Feedback
app.post('/feedback', async (req, res) => {
	const { evaluationId, menteeId, content } = req.body;

	try {
		// Pastikan mentee dan evaluasi ada
		const menteeExists = await prisma.user.findUnique({
			where: { id: menteeId },
		});

		const evaluationExists = await prisma.evaluation.findUnique({
			where: { id: evaluationId },
		});

		if (!menteeExists || !evaluationExists) {
			return res.status(404).send('Mentee atau evaluasi tidak ditemukan.');
		}

		// Periksa apakah sudah ada feedback untuk mentee ini dalam evaluasi yang sama
		const existingFeedback = await prisma.feedback.findFirst({
			where: {
				menteeId: menteeId,
				evaluationId: evaluationId,
			},
		});

		if (existingFeedback) {
			return res.status(400).json({
				error: true,
				message: 'Feedback untuk mentee ini dalam evaluasi yang diberikan sudah ada.',
			});
		}

		// Membuat feedback baru
		await prisma.feedback.create({
			data: {
				evaluationId,
				menteeId,
				content,
			},
		});

		res.json({
			error: false,
			message: 'Feedback berhasil dikirim.',
		});
	} catch (error) {
		console.error('Error saat mencoba membuat feedback: ', error);
		res.status(500).send('Server error');
	}
});

// Get my class and session list

app.get('/users/:id/my-class', async (req, res) => {
	try {
		const userId = req.params.id;
		const user = await prisma.user.findUnique({
			where: { id: userId },
			include: {
				experiences: true,
				class: {
					include: {
						learningMaterial: true,
						evaluations: {
							include: {
								feedbacks: true,
							},
						},
						transactions: {
							include: {
								User: {
									select: {
										name: true,
									},
								},
							},
						},
					},
				},
				session: {
					include: {
						participant: true,
					},
				},
				transactions: {
					include: {
						class: {
							include: {
								mentor: {
									select: {
										name: true,
										photoUrl: true,
									},
								},
								evaluations: {
									include: {
										feedbacks: true,
									},
								},
								learningMaterial: true,
							},
						},
					},
				},
				participant: {
					include: {
						session: {
							include: {
								mentor: {
									select: {
										name: true,
										photoUrl: true,
									},
								},
							},
						},
					},
				},
				mentorReviews: true,
			},
		});

		res.json({
			error: false,
			message: 'My class and session fetched successfully',
			user: user,
		});
	} catch (error) {
		console.error('Error fetching my class and session:', error);
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

// Reject mentor
app.patch('/admin/reject-mentor', verifyToken, async (req, res) => {
	try {
		// Extract the mentor ID and reject reason from the request body
		const { mentorId, rejectReason } = req.body;

		// Check if the mentor exists
		const existingMentor = await prisma.user.findUnique({
			where: { id: mentorId },
		});

		if (!existingMentor) {
			return res.status(404).json({ error: true, message: 'Mentor not found' });
		}

		// Reject the mentor and update the reject reason
		const updatedMentor = await prisma.user.update({
			where: { id: mentorId },
			data: { userType: 'RejectedMentor', rejectReason: rejectReason },
		});

		// Return success response with the updated mentor information
		res.json({
			error: false,
			message: 'Mentor rejected successfully',
			mentor: updatedMentor,
		});
	} catch (error) {
		console.error('Error rejecting mentor:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// verify class and send link zoom
app.patch('/admin/verify-class', verifyToken, async (req, res) => {
	try {
		// Extract the class ID from the
		const { classId, zoomLink } = req.body;

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
			data: { isVerified: true, isAvailable: true, zoomLink: zoomLink },
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

app.patch('/admin/reject-class', verifyToken, async (req, res) => {
	try {
		// Extract the class ID and reject reason from the request body
		const { classId, rejectReason } = req.body;

		// Check if the class exists
		const existingClass = await prisma.class.findUnique({
			where: { id: classId },
		});

		if (!existingClass) {
			return res.status(404).json({ error: true, message: 'Class not found' });
		}

		// Update the class to mark it as rejected and store the reject reason
		const updatedClass = await prisma.class.update({
			where: { id: classId },
			data: { rejectReason: rejectReason }, // Assume you use `isActive` to indicate class status
		});

		// Return success response
		res.json({
			error: false,
			message: 'Class rejected successfully',
			class: updatedClass,
		});
	} catch (error) {
		console.error('Error rejecting class:', error);
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

// reject mentee transaction
app.patch('/admin/reject-transaction', verifyToken, async (req, res) => {
	try {
		const { transactionId } = req.body;

		// Check if the transaction exists
		const existingTransaction = await prisma.transaction.findUnique({
			where: { id: transactionId },
		});

		if (!existingTransaction) {
			return res.status(404).json({ error: true, message: 'Transaction not found' });
		}

		// Reject the transaction
		const updatedTransaction = await prisma.transaction.update({
			where: { id: transactionId },
			data: { paymentStatus: 'Rejected' },
		});

		res.json({
			error: false,
			message: 'Transaction rejected successfully',
			transaction: updatedTransaction,
		});
	} catch (error) {
		console.error('Error rejecting transaction:', error);
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

// list all class where isVerified is false
app.get('/admin/unverified-class', async (req, res) => {
	try {
		// Get today's date at 00:00:00 for consistent comparison
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const unverifiedClasses = await prisma.class.findMany({
			where: {
				isVerified: false,
				rejectReason: null,

				startDate: {
					gt: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000),
				},
			},
			include: {
				mentor: {
					select: {
						name: true,
					},
				},
			},
		});

		res.json({
			error: false,
			message: 'Unverified classes fetched successfully',
			classes: unverifiedClasses,
		});
	} catch (error) {
		console.error('Error fetching unverified classes:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list all mentor where userType is PendingMentor
app.get('/admin/unverified-mentor', async (req, res) => {
	try {
		const unverifiedMentors = await prisma.user.findMany({
			where: { userType: 'PendingMentor' },
			include: {
				experiences: true,
			},
		});

		res.json({
			error: false,
			message: 'Unverified mentors fetched successfully',
			mentors: unverifiedMentors,
		});
	} catch (error) {
		console.error('Error fetching unverified mentors:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list all transaction where paymentStatus is Pending
app.get('/admin/unverified-transaction', async (req, res) => {
	try {
		const unverifiedTransactions = await prisma.transaction.findMany({
			where: { paymentStatus: 'Pending' },
			include: {
				class: {
					include: {
						mentor: {
							select: {
								name: true,
							},
						},
					},
				},
				User: true,
			},
		});

		res.json({
			error: false,
			message: 'Unverified transactions fetched successfully',
			transactions: unverifiedTransactions,
		});
	} catch (error) {
		console.error('Error fetching unverified transactions:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list all transaction
app.get('/admin/list-transaction', verifyToken, async (req, res) => {
	try {
		const transactions = await prisma.transaction.findMany({
			include: {
				class: {
					include: {
						mentor: {
							select: {
								name: true,
							},
						},
					},
				},
				User: true,
			},
		});

		res.json({
			error: false,
			message: 'Transactions fetched successfully',
			transactions: transactions,
		});
	} catch (error) {
		console.error('Error fetching transactions:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// list classes by education level
app.get('/admin/list-class/:educationLevel', verifyToken, async (req, res) => {
	try {
		const { educationLevel } = req.params;
		const classes = await prisma.class.findMany({
			where: {
				educationLevel: educationLevel,
				// isVerified: true,
			},
			include: {
				mentor: {
					select: {
						name: true,
						photoUrl: true,
					},
				},
				transactions: {
					// users name who have booked the class and their payment status are approved
					where: { paymentStatus: 'Approved' },
					include: {
						User: {
							select: {
								name: true,
							},
						},
					},
				},
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

// List all sessions
app.get('/admin/list-session', verifyToken, async (req, res) => {
	try {
		const sessions = await prisma.session.findMany({
			include: {
				mentor: {
					select: {
						name: true,
						photoUrl: true,
					},
				},
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

// list all mentees
app.get('/admin/list-mentee', verifyToken, async (req, res) => {
	try {
		const mentees = await prisma.user.findMany({
			where: { userType: 'Mentee' },
			include: {
				experiences: true,
				transactions: {
					where: { paymentStatus: 'Approved' },
					include: {
						class: {
							select: {
								name: true,
							},
						},
					},
				},
				participant: {
					include: {
						session: {
							select: {
								title: true,
							},
						},
					},
				},
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

// list all mentors
app.get('/admin/list-mentor', verifyToken, async (req, res) => {
	try {
		const mentors = await prisma.user.findMany({
			where: { userType: 'Mentor' },
			include: {
				experiences: true,
				class: {
					select: {
						name: true,
						isVerified: true,
					},
				},
				session: {
					select: {
						title: true,
						isActive: true,
					},
				},
				mentorReviews: {
					// nama pengulas
					include: {
						reviewer: {
							select: {
								name: true,
							},
						},
					},
				},
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
			message: 'Mentor fetched successfully',
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
				transactions: {
					include: {
						class: true, // Menyertakan detail kelas untuk setiap transaksi
						User: true,
					},
				},
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

app.get('/communities', async (req, res) => {
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
