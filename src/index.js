const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const prisma = require('./db');

// Express App Initialization
const app = express();
const PORT = process.env.PORT;
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Register Endpoint
app.post('/register', async (req, res) => {
	try {
		// Extracting name, email, and photoURL from the request body
		const { name, email, photoURL } = req.body;

		// Check if the user already exists in the database
		const existingUser = await prisma.user.findUnique({
			where: { email: email },
		});

		if (existingUser) {
			return res.status(409).json({ error: true, message: 'User already exists' });
		}

		// Creating a new user in the database
		const newUser = await prisma.user.create({
			data: {
				name: name,
				email: email,
				photo_url: photoURL,
			},
		});

		// Return a success response with the created user information
		res.status(201).json({
			error: false,
			message: 'User registered successfully',
			user: {
				id: newUser.id,
				email: newUser.email,
				name: newUser.name,
				photo_url: newUser.photo_url,
			},
		});
	} catch (error) {
		console.error('Error in user registration:', error);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// SELECT ROLE
app.post('/select-role', async (req, res) => {
	try {
		// Assuming that the request body contains the selected role as an enum
		const { selectedRole } = req.body;

		// Validate the selected role (ensure it's a valid enum value)
		const validRoles = ['Admin', 'PendingMentor', 'Mentor', 'Mentee'];
		if (!validRoles.includes(selectedRole)) {
			return res.status(400).json({ error: true, message: 'Invalid role selected' });
		}

		// Update the user's role in the database (replace 'userId' with the actual user ID)
		const userId = req.user.user.id; // Assuming you have access to the user ID
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { user_type: selectedRole },
		});

		// Return a success response with the updated user information
		res.json({
			error: false,
			message: 'Role selected successfully',
			user: {
				id: updatedUser.id,
				email: updatedUser.email,
				user_type: updatedUser.user_type,
			},
		});
	} catch (error) {
		console.error('Error selecting role:', error);
		console.error('Request body:', req.body);
		res.status(500).json({ error: true, message: 'Internal server error' });
	}
});

// Landing page
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log('MentorMatch API running in port: ' + PORT);
});
