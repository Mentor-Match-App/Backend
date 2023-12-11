const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const { PrismaClient } = require('@prisma/client');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up session for storing user information
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

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
			callbackURL: 'http://localhost:8000/auth/google/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				// Check if the user exists in the database
				const user = await prisma.user.findUnique({
					where: { email: profile.emails[0].value },
				});

				if (user) {
					// If the user already exists, generate and return a JWT
					const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
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
					const token = jwt.sign({ userId: newUser.id }, 'your-secret-key', {
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

// Routes for Google OAuth login and callback
app.get(
	'/auth/google',
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
				message: 'Registration successful',
				user: req.user.user,
				token: req.user.token,
			});
		} else {
			// Return a different JSON format for an existing user
			res.json({
				error: false,
				message: 'Login successful',
				user: req.user.user,
				token: req.user.token,
			});
		}
	}
);

// Landing page
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log('MentorMatch API running in port: ' + PORT);
});
