/**
 *
 */

// Require .env to parse enviroment variables
require('dotenv').load();

// modules ==========================================================
var express 		= require('express');
var bodyParser 		= require('body-parser');
var morgan     		= require('morgan'); 		// used to see requests
var	methodOverride 	= require('method-override');
var path 			= require('path');
var mongoose 		= require('mongoose');
var passport 		= require('passport');
var flash    		= require('connect-flash');
var cookieParser 	= require('cookie-parser');
var session 		= require('express-session');

var config 			= require('./config/config');
var app 			= express();

var public_folder   = 'public';

// Configuration ====================================================

// use body parser so we can grab information from POST requests
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console 
app.use(morgan('dev'));

// Setting Passport
app.use(session({
	secret: config.secret,
	resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

// Connecting to the DB
mongoose.connect(config.db_url, function (err, database){
	if(!err) {
		console.log("-- Connected to the database \'" + process.env.DB_HOST + "\'");
	} else {
		console.log(err);
	}
});

// Setting port and static path to express
app.use(express.static(path.join(__dirname, public_folder)));

// Routes ===========================================================
var apiRoutes = require('./app/routes/api')(app, express, passport);
app.use('/api', apiRoutes);
require('./app/routes/register')(app);
require('./app/routes/login')(app, passport);

// Send users to front-end
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/' + public_folder + '/index.html'));
});

// Listen ===========================================================
app.listen(config.port);
console.log("- Express server listening on port " + config.port);