const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const prisma = require('./db');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
	'121006467880-u9h5rr2d8a6sgmf6hihs9gmpvcb37eqa.apps.googleusercontent.com'
); //

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function verifyToken(token) {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: '121006467880-u9h5rr2d8a6sgmf6hihs9gmpvcb37eqa.apps.googleusercontent.com', // Replace with your Google client ID
	});
	const payload = ticket.getPayload();
	return payload; // This payload contains user information
}

app.post('/register', async (req, res) => {
	const { token } = req.body;
	try {
		const payload = await verifyToken(token);
		const user = await prisma.user.upsert({
			where: { email: payload['email'] },
			update: {},
			create: {
				email: payload['email'],
				name: payload['name'],
			},
		});
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
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
