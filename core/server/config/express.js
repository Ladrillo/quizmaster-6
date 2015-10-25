// EXPRESS CONFIGURATION FILE
var config = require('./config'),
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    webpack = require('webpack'),
    passport = require('passport'),
    // these modules are loaded later, depending on environment
    webpackConfig, webpackMiddleware, morgan, compress;


module.exports = function () {
    // generates the app object
    var app = express();


    // Environment-dependant middleware
    if (process.env.NODE_ENV === 'development') {

        webpackMiddleware = require('webpack-dev-middleware');
        webpackConfig = require('../../../webpack.config');
        app.use(webpackMiddleware(webpack(webpackConfig), {
            inline: true,
            publicPath: '/build/'
        }));

        morgan = require('morgan'),
        app.use(morgan('dev'));
    }
    else {
        webpackConfig = require('../../../webpack-p.config');

        compress = require('compression');
        app.use(compress());
    }



    // this middleware will run no matter the environment
    app.use(cors());

    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));
    app.use(bodyParser.json());

    app.use(methodOverride());


    // cookie support
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // here we set our templating engine
    // route is relative to server.js
    app.set('views', './core/server/views');
    app.set('view engine', 'ejs');


    // HERE WE PLUG PASSPORT MIDDLEWARE
    app.use(passport.initialize());
    app.use(passport.session());


    // HERE WE INCLUDE THE ROUTES
    // we run the router objects giving them the express app
    require('../features/users/routes/users.server.routes.js')(app);


    // THIS WILL BE ANGULAR APP
    // needs to come after setting the rendering engine
    app.use(express.static('./core/client'));
    app.use(express.static('./build'));
    // .get('/', function (req, res) {
    //     res.sendFile('index.html', {
    //         root: './core/client'
    //     });
    // });



    return app;
};