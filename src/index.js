const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const cors = require('cors');
const prisma = require('./db');

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up session for storing user information
app.use(session({ secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true }));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Passport serialization and deserialization
passport.serializeUser((user, done) => {
	done(null, user);
});
``;

passport.deserializeUser((obj, done) => {
	done(null, obj);
});

// Set up Google OAuth strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			// callbackURL: 'http://localhost:8000/auth/google/callback',
			callbackURL: 'https://shy-lime-bream-cuff.cyclic.app/auth/google/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				// Check if the user exists in the database
				const user = await prisma.user.findUnique({
					where: { email: profile.emails[0].value },
				});

				if (user) {
					// If the user already exists, generate and return a JWT
					const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
						expiresIn: '60h', // Set the expiration time as needed
					});

					return done(null, { user, token });
				} else {
					// If the user doesn't exist, create a new user in the database
					const newUser = await prisma.user.create({
						data: {
							email: profile.emails[0].value,
							name: profile.displayName,
							photo: profile.photos[0].value,
						},
					});

					// Generate and return a JWT for the new user
					const token = jwt.sign({ userId: newUser.id }, process.env.SECRET_KEY, {
						expiresIn: '60h', // Set the expiration time as needed
					});

					// Return the newly created user in JSON format
					return done(null, { user: newUser, token, isNewUser: true });
				}
			} catch (error) {
				return done(error, null);
			}
		}
	)
);

app.get(
	'/login',
	passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/userinfo.profile',
		],
	})
);

app.get(
	'/register',
	passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/userinfo.profile',
		],
	})
);

app.get(
	'/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/' }),
	(req, res) => {
		// Check if the user is new or not
		const isNewUser = req.user.isNewUser || false;

		if (isNewUser) {
			// Return a custom JSON format for a new user
			res.json({
				error: false,
				message: 'User Created',
				// return only user id and email
				user: {
					id: req.user.user.id,
					email: req.user.user.email,
				},
				token: req.user.token,
			});
		} else {
			// Return a different JSON format for an existing user
			res.json({
				error: false,
				message: 'success',
				// return only user id and email
				user: {
					id: req.user.user.id,
					email: req.user.user.email,
				},
				token: req.user.token,
			});
		}
	}
);

// SELECT ROLE
app.post('/select-role', async (req, res) => {
	console.log('Received request:', req);

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

// SELECT ROLE TEST WITH MANUAL USER ID
// app.post('/select-role', async (req, res) => {
// 	try {
// 		// Assuming that the request body contains the selected role as an enum
// 		const { selectedRole } = req.body;

// 		// Validate the selected role (ensure it's a valid enum value)
// 		const validRoles = ['Admin', 'PendingMentor', 'Mentor', 'Mentee'];
// 		if (!validRoles.includes(selectedRole)) {
// 			return res.status(400).json({ error: true, message: 'Invalid role selected' });
// 		}

// 		// Simulate the user ID (replace 'simulatedUserId' with the desired user ID for testing)
// 		const simulatedUserId = 'b7c7f815-d75a-4967-b6ad-25a48aa56b6c';

// 		// Update the user's role in the database
// 		const updatedUser = await prisma.user.update({
// 			where: { id: simulatedUserId },
// 			data: { user_type: selectedRole },
// 		});

// 		// Return a success response with the updated user information
// 		res.json({
// 			error: false,
// 			message: 'Role selected successfully',
// 			user: {
// 				user_type: updatedUser.user_type,
// 			},
// 		});
// 	} catch (error) {
// 		console.error('Error selecting role:', error);
// 		res.status(500).json({ error: true, message: 'Internal server error' });
// 	}
// });

// Landing page
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log('MentorMatch API running in port: ' + PORT);
});
