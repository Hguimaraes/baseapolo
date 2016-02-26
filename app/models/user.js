/**
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	name: String,
	email: { type: String, required: true, index: { unique: true }},
	password: { type: String, required: true, select: false },
	course: String
});

// Passa a senha para o hash antes que o usuario seja salvo
userSchema.pre('save', function(next) {
	var user = this;

	// Passa a senha para o hash apenas se a senha foi modificada ou se é um usuario novo
	if (!user.isModified('password')) return next();

	// gera o hash
	bcrypt.hash(user.password, null, null, function(err, hash) {
		if (err) return next(err);

		// Muda a senha para o formato em hash
		user.password = hash;
		next();
	});
});

// Metodo para comparar uma dada senha com o hash do banco de dados
userSchema.methods.comparePassword = function(password) {
	var user = this;
	return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('user', userSchema);