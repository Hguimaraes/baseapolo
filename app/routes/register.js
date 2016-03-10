var user = require('../models/user');

module.exports = function registerRoutes (app) {
    app.post('/register', function (req, res) {
        // console.log(req, res);
        console.log(req.body);
        user.register(req, res);
    });
};