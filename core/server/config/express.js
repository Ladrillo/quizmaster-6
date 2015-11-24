// EXPRESS CONFIGURATION FILE


var config = require('./config'),
    environment = process.env.NODE_ENV,

    // middleware
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    webpack = require('webpack'),
    passport = require('passport'),

    // middleware that is required later, depending on environment
    webpackConfig, webpackMiddleware, morgan, compress;


module.exports = function () {
    // generates the app object
    var app = express();


    // here we set our templating engine
    // route is relative to server.js
    app.set('views', ['./core/client']);
    app.set('view engine', 'ejs');


    // this middleware will run no matter the environment
    // app.use(cors());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));

    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // ENVIRONMENT DEPENDANT MIDDLEWARE
    if (environment === 'development') {

        // Webpack
        webpackMiddleware = require('webpack-dev-middleware');
        webpackConfig = require('../../../webpack.config');
        app.use(webpackMiddleware(webpack(webpackConfig), {
            inline: true,
            publicPath: '/build/',
            stats: {
                colors: true
            }
        }));

        // the rest
        morgan = require('morgan'),
        app.use(morgan('dev'));
    }

    else if ((environment === 'production')) {

        // Webpack
        webpackConfig = require('../../../webpack-p.config');

        // the rest
        compress = require('compression');
        app.use(compress());
    }


    // HERE WE PLUG PASSPORT MIDDLEWARE
    require('./passport.js')(app);


    // HERE WE INCLUDE THE ROUTES
    require('../features/auth/oauth.server.routes')(app);
    require('../features/quiz/quiz.server.routes')(app);
    require('../features/user/user.server.routes')(app);


    app.route('/api/pene?')
        .get(function (req, res, next) {
            res.send('mierda');
        });

    app.route('/api/pene')
        .get(function (req, res, next) {
            res.send('hola');
        });





    // THIS WILL BE ANGULAR APP
    // needs to come after setting the rendering engine
    app.use(express.static('./core/client'));


    return app;
};