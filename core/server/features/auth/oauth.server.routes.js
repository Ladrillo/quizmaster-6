var passport = require('passport');

module.exports = function (app) {

    // GOOGLE AUTHENTICATION ROUTES
    app.route('/auth/google/oauth2redirect')
        .get(passport.authenticate('google', {
            successRedirect: '/',
            failure: '/error/'
        }));
        

    app.route('/auth/google')
        .get(passport.authenticate('google', {
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }));
        

    // SUCCESS REDIRECT
    app.route('/')
        .get(function (req, res) {
            res.render('index', {
                userJSON: req.user,
                userStr: JSON.stringify(req.user)
            });
        });


    // CHECKING IF LOGIN
    app.route('/auth/checklogin')
        .get(function (req, res) {
            if (req.user) res.send(true);
            else res.send(false);
        });


    // LOGING OUT
    app.route('/auth/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/');
        });


    // PROTECTING ROUTES
    app.route('/notallowed')
        .get(function (req, res, next) {
            if (!req.user) {
                res.redirect('/auth/google');
            }
            next();
        });
};