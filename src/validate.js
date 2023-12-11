// Access Validation Middleware
const validateToken = (req, res, next) => {
	const authorizationHeader = req.headers.authorization;
	let result;
	if (authorizationHeader) {
		const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
		const options = {
			expiresIn: '60h',
		};
		try {
			// verify makes sure that the token hasn't expired and has been issued by us
			result = jwt.verify(token, 'your-secret-key', options);

			// Let's pass back the decoded token to the request object
			req.decoded = result;

			// We call next to pass execution to the subsequent middleware
			next();
		} catch (err) {
			// Throw an error just in case anything goes wrong with verification
			throw new Error(err);
		}
	} else {
		result = {
			error: `Authentication error. Token required.`,
			status: 401,
		};
		res.status(401).send(result);
	}
};

// Access Validation Admin
const validateAdmin = (req, res, next) => {
	if (req.decoded && req.decoded.role === 'admin') {
		next();
	} else {
		res.status(403).json({
			error: 'You are not authorized to access this resource.',
		});
	}
};

// Access Validation Mentor
const validateMentor = (req, res, next) => {
	if (req.decoded && req.decoded.role === 'mentor') {
		next();
	} else {
		res.status(403).json({
			error: 'You are not authorized to access this resource.',
		});
	}
};

// Access Validation Mentee
const validateMentee = (req, res, next) => {
	if (req.decoded && req.decoded.role === 'mentee') {
		next();
	} else {
		res.status(403).json({
			error: 'You are not authorized to access this resource.',
		});
	}
};
