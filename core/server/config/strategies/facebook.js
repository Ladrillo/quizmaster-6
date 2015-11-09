var config = require('../config'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../../features/users/user.server.model');

module.exports = function () {

    passport.use(new FacebookStrategy(
        {
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackURL,
            // enableProof: config.facebook.enableProof,
            // passReqToCallback: config.facebook.callbackURL.passReqToCallback,
            // profileFields: config.facebook.callbackURL.profileFields
        },

        function (req, accessToken, refreshToken, profile, done) {

            console.log(profile);

            var query = { 'facebook.id': profile.id };

            User.findOne(query, function (error, user) {

                if (user) {
                    console.log('Facebook user found in database: ', user);
                    done(null, user);
                }
                else {
                    console.log('Facebook user not found in database');
                    user = new User;
                    user.email = profile.emails[0].value;
                    user.displayName = profile.displayName;

                    user.facebook = {};
                    user.facebook.id = profile.id;
                    user.facebook.token = accessToken;

                    user.save();
                    done(null, user);
                }
            });
        }));
};
