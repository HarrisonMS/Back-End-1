const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');
const checkIfUsernameIsTaken = require('../middleware/checkIfUsernameIsTaken')

router.post('/register', checkIfUsernameIsTaken, (req, res) => {
	let user = req.body;
	if (!user.username) {
		res.status(412).json({message: 'missing username buddy'})
	}
	if (!user.password) {
        res.status(422).json({message: "Missing password bud"})
    }
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;
	Users.add(user)
		.then((saved) => {
			const token = signToken(user);
			res.status(201).json({
				saved,
				token,
				message : `Welcome ${user.username}!`,
			});
		})
		.catch((error) => {
			res.status(500).json({ errorMessage: 'registration does not work' });
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;
	Users.findBy({ username })
		.first()
		.then((user) => {console.log(username)
			if (user && bcrypt.compareSync(password, user.password)) {
				//signToken
				const token = signToken(user);
				//send the token
				res.status(200).json({
					id:user.id,
					token,
					message : `Welcome ${user.username}!`,
				});
			} else {
				res.status(401).json({ message: 'Invalid Creds!' });
			}
		})
		.catch((error) => {
			res.status(500).json({ errorMessage: 'could not log in' });
		});
});

function signToken(user) {
	const payload = {
		username : user.username,
	};
	const secret = process.env.JWT_SECRET || 'keep it safe!';
	const options = {
		expiresIn : '24h',
	};
	return jwt.sign(payload, secret, options);
}


module.exports = router;