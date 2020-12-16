var express = require('express');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	user: String,
	pass: String
});

var User = mongoose.model('User', UserSchema);

// ---

[['Administrator', 'admin', 'admin'], ['User', 'user', 'user'], ['Jules', 'bad', 'motherfucker']].forEach(function (cred) {
	var instance = new User();

	// ---

	instance.name = cred[0];
	instance.user = cred[1];
	instance.pass = cred[2];

	// ---

	instance.save();
});

// ---
// ---
// ---

var app = express();

// ---

app.set('views', __dirname);
app.set('view engine', 'jade');

// ---

app.use(require('body-parser').urlencoded({extended: true}));

// ---

app.get('/', function(req, res) {
	res.render('index', {});
});

app.get('/user/:userid/invoices', async (req, res) => ({
    const invoices = await Invoices.findMany({ user: req.params.userid });
    return invoices;
});

app.post('/login', async (req, res) => ({
    const user = await User.findOne({user: req.body.user, pass: req.body.pass});
    //other code
});

{
    "username": {"$gt": undefined},
    "password": {"$gt": undefined}
}

{
    "username": "test",
    "password": "test"
}

export interface LoginRequest {
    username: string;
    password: string;
}

var server = app.listen(49090, function () {
	mongoose.connect('mongodb://localhost/acme-no-login');

	// ---

	console.log('listening on port %d', server.address().port);
});

// ---
