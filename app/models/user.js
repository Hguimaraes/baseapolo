/**
 *
 */

var database = require('./database');
var mongoose = database.mongoose;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, select: false },
    course: String,
    stars: [String],
    creations: [String]
});

// Passa a senha para o hash antes que o usuario seja salvo
userSchema.pre('save', function (next) {
    var user = this;

    // Passa a senha para o hash apenas se a senha foi modificada ou se é um usuario novo
    if (!user.isModified('password')) return next();

    // gera o hash
    bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) return next(err);

        // Muda a senha para o formato em hash
        user.password = hash;
        next();
    });
});

// Metodo para comparar uma dada senha com o hash do banco de dados
userSchema.methods.comparePassword = function (password) {
    var user = this;
    return bcrypt.compareSync(password, user.password);
};

var user_model = mongoose.model('user', userSchema);

var User = function () {
    this.model = user_model;

    this.find = function (req, res) {
        var user = this.model.findOne({ 'email': req.body.email }, function (err, user) {
            if (err) {
                console.log(err);
                res.send({ 'error': 'Um erro ocorreu ao fazer a requisição' });
            } else {
                if (!user) {
                    res.send({ 'error': 'Usuário não encontrado' });
                    console.log('User not found');
                } else {
                    res.send(user);
                    console.log(user);
                }
            }
        });
    };

    this.findAll = function (req, res) {
        var users = this.model.find(function (err, users) {
            res.send(users);
        });
    };

    this.register = function (req, res) {
        var new_user = new this.model.prototype.constructor(req.body);

        new_user.save(function (err) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send({ '_id': new_user._id });
                console.log('saved');
            }
        });
    };
};

var user = new User();

// user.findAll({}, { send: function (doc) { console.log(doc) } });
user.find({ 'body': { 'email': 'eu@eu.com' } }, { send: function () { } });
// user_model.remove({}, function(err){
//     console.log("Removed all users");
// });

module.exports = user; 