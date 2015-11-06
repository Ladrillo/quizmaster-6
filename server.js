process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;


var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express'),
    passport = require('./core/server/config/passport');


// var db = mongoose();
var app = express();


app.listen(port, function () {
    console.log('listening on ' + port);
});


module.exports = app;