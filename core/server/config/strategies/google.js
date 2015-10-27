var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = require('../../features/users/user.server.model.js');
    
module.exports = function () {
    
    passport.use(new GoogleStrategy(
        {
            clientID: "419787304121-0h5tfaol93fsrahr3ev0pvfs9j072trc.apps.googleusercontent.com",
            clientSecret: "XWSe_3RYz39-nj2gb7dZcar6",
            callbackURL: "http://localhost:5000/auth/google/oauth2redirect"
        },
        
        function (req, accessToken, refreshToken, profile, done) {
            var query = { 'google.id': profile.id };

            User.findOne(query, function (error, user) {
                if (user) {
                    console.log('Google user found in database: ', user);
                    done(null, user);
                }
                else {
                    console.log('Google user not found in database');
                    user = new User;
                    user.email = profile.emails[0].value;
                    user.image = profile._json.image.url;
                    user.displayName = profile.displayName;

                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;

                    user.save();
                    done(null, user);
                }
            });
        }));
      
};