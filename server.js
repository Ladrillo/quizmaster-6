process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;


// bringing the express and mongoose objects from config
var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');
    // passport = require('./core/server/config/passport');


var db = mongoose(),
    app = express();
    // passport = passport();


app.listen(port, function () {
    console.log('listening on ' + port);
});


module.exports = app;