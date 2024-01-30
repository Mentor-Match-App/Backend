const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const prisma = require('./db');
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

// Firebase Admin Initialization
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

// Express App Initialization
const app = express();
const PORT = process.env.PORT;
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Verify Google Token Function
async function verifyToken(idToken) {
	try {
		const decodedToken = await admin.auth().verifyIdToken(idToken);
		const uid = decodedToken.uid;
		// Lakukan proses lebih lanjut dengan informasi pengguna
		return decodedToken;
	} catch (error) {
		// Tangani error verifikasi token
		console.error('Error verifying token:', error);
	}
}

// Register Endpoint
app.post('/register', async (req, res) => {
	try {
		const { idToken } = req.body;
		if (!idToken) {
			return res.status(400).json({ error: true, message: 'Missing idToken' });
		}

		const decodedToken = await verifyToken(idToken);
		if (!decodedToken) {
			return res.status(400).json({ error: true, message: 'Invalid idToken' });
		}

		const { email, name } = decodedToken;
		const newUser = await prisma.user.create({
			data: {
				email: email,
				name: name,
			},
		});

		res.json({
			error: false,
			message: 'User created successfully',
			user: {
				id: newUser.id,
				email: newUser.email,
				user_type: newUser.user_type,
			},
		});
	} catch (error) {
		console.error('Error registering user:', error);
		console.error('Request body:', req.body);
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
