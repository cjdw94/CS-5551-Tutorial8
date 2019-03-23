const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_Secret = 'tacotacotacotaco';

var testUser = { email: 'cjdw94@mail.umkc.edu', password: 'qaz123abc'};

app.post('/api/authenticate', (req, res) => {
	
	if (req.body) {
		var user = req.body;
		console.log(user);
		
		if ((testUser.email === req.body.email) && (testUser.password === req.body.password)) {
			var token = jwt.sign(user, JWT_Secret);
			res.status(200).send({
				signed_user: user,
				token: token
			});
		} else {
			res.status(403).send({
				errorMessage: 'Authorization needed!'
			});
		}
	} else {
		res.status(403).send({
			errorMessage: 'Please provide correct email and password'
		});
	}
});

app.listen(5000, () => console.log('Server started on port 5000'));