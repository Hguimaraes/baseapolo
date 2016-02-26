var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../app/models/user');

// Exportar esta função para nosso aplicativo usando module.exports
module.exports = function(passport) {

    // Usado para serializar o usuario para sua sessão
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // Usado para desserializar o usuario
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // Inscrição local
	passport.use('local-signup', new LocalStrategy({
		nameField: 'nome'
		usernameField : 'email',
		passwordField : 'senha',
		courseField: 'curso',
		passReqToCallback : true
	},
	function(req,name, email, password, course, done) {

	}));
};