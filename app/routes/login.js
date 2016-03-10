var user = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function login(app, passport) {
    app.post('/login', function (req, res) {

        if (!req.body.email) {
            res.send({ 'error': 'Email inválido' });
        } else {
            if (!req.body.password) {
                res.send({ 'error': 'Senha inválida' });
            } else {
                var query = user.model.findOne({ 'email': req.body.email }).select({ 'password': true });

                query.exec(function (err, user) {
                    if (err) {
                        console.log(err);
                        res.send({ 'error': 'Um erro ocorreu ao fazer a requisição' });
                    } else {
                        if (!user) {
                            res.send({ 'error': 'Usuário não encontrado' });
                            console.log('User not found');
                        } else {
                            console.log(req.body.password, user.password);
                            if (bcrypt.compareSync(req.body.password, user.password)) {
                                console.log("User is correct");
                                console.log(user);
                                res.send({'_id': user._id});
                            } else {
                                res.send({ 'error': 'Senha incorreta' });
                                console.log("wrong password");
                            }
                        }
                    }
                });

            }
        }
    });
};