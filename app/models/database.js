var mongoose = require('mongoose');
mongoose.createConnection(process.env.DB_HOST);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('connected to the database');
});

exports.db = db;
exports.mongoose = mongoose;