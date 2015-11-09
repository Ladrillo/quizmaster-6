var config = require('../../config/config'),
    passport = require('passport'),
    facebook = require('../../services/facebook.server.service')(config.facebook.clientID, config.facebook.clientSecret);

module.exports = function (app) {

    // GOOGLE AUTHENTICATION AND REDIRECTION
    app.route('/auth/google')
        .get(passport.authenticate('google', {
            session: false,
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }));

    app.route('/auth/google/oauth2redirect')
        .get(passport.authenticate('google', {
            successRedirect: '/',
            failure: '/error/'
        }));

    // FACEBOOK AUTHENTICATION AND REDIRECTION

    app.route('/auth/facebook')
        .get(passport.authenticate('facebook', {
            scope: ['email']
        }));

    app.route('/auth/facebook/oauth2redirect')
        .get(passport.authenticate('facebook', {
            successRedirect: '/',
            failure: '/error/'
        }));


    // ROOT OF THE APPLICATION
    app.route('/')
        .get(function (req, res) {

            if (req.user && req.user.facebook) {
                facebook.getEmail(req.user.facebook.token,
                    function (results) {
                        console.log('results 2: ', results);
                        req.user.email = results.email;
                        res.render('index', {
                            userJSON: req.user,
                            userStr: JSON.stringify(req.user)
                        });
                    }); 
            }

            else {
                res.render('index', {
                    userJSON: req.user,
                    userStr: JSON.stringify(req.user)
                });
            }
        });



    // AUXILIARY ENDPOINTS

    // checking if logged-in
    app.route('/auth/checklogin')
        .get(function (req, res) {
            if (req.user) res.send(true);
            else res.send(false);
        });


    // logging-out
    app.route('/auth/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/');
        });


    // protecting routes
    app.route('/notallowed')
        .get(function (req, res, next) {
            if (!req.user) {
                res.redirect('/auth/google');
            }
            next();
        });
};