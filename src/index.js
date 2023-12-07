const express = require('express');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Register with google Oauth
app.post('/register', async (req, res) => {
	const { email } = req.body;

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (user) {
		return res.status(400).json({ message: 'User already exists' });
	}

	const newUser = await prisma.user.create({
		data: {
			email,
			name,
		},
	});

	res.status(201).json(newUser);
});
//  login with google Oauth
app.post('/login', async (req, res) => {
	const { email, password } = req.body;

	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}
});

app.get('/users', async (req, res) => {
	const users = await prisma.user.findMany();

	res.send(users);
});

app.listen(PORT, () => {
	console.log('MentorMatch API running in port: ' + PORT);
});
