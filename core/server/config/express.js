// EXPRESS CONFIGURATION FILE
var config = require('./config'),
    webpackConfig = require('../../../webpack.config'),
    webpackConfigProd = require('../../../webpack-p.config'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    webpack = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    passport = require('passport');


module.exports = function () {
    // generates the app object
    var app = express();


    // Environment-dependant middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

        app.use(webpackMiddleware(webpack(webpackConfig), {
            inline: true,
            publicPath: '/build/'
        }));
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compress());

        app.use(webpackMiddleware(webpack(webpackConfigProd), {
            inline: true,
            publicPath: '/build/'
        }));
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

    return app;
};