/**
 *
 */

// Load models
var user = require('../models/user');
var opportunity = require('../models/opportunity');

var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var secret = config.secret

function isAuthenticated(req, res, next) {
	if (req.user.authenticated)
			return next();

	// If it's not logged, redirect to home
	res.redirect('/');
}

// Exposing routes to server.js through a REST API
module.exports = function(app, express, passport) {
	var apiRouter = express.Router();

	// Route middleware to verify a token
	apiRouter.use(function(req, res, next) {
		console.log('Somebody just came to our app!');
	});

	app.get('/logged', function(req, res, next) {
    if(!isAuthenticated) {
			res.send(JSON.stringify({ logged: false }));
		} else {
			res.send(JSON.stringify({ logged: true }));
		}
	});

	return apiRouter;
}
