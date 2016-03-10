var user = require('../models/user');

module.exports = function registerRoutes (app) {
    app.post('/register', function (req, res) {
        // console.log(req, res);
        user.register(req, res);
    });
};