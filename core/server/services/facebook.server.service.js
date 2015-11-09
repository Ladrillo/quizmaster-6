var OAuth = require('OAuth').OAuth2;

var Facebook = function (facebookKey, facebookSecret) {

    var key = facebookKey,
        secret = facebookSecret;

    var oauth = new OAuth(
        key,
        secret,
        'https://graph.facebook.com',
        null,
        'oauth2/token',
        null
    );

    var getEmail = function (userKey, done) {

        oauth.get('https://graph.facebook.com/v2.5/me?fields=email',
        userKey,
        function (err, results, res) {
            console.log('results service', results);
            results = JSON.parse(results);
            done(results);
        });
    };
    return {
        getEmail: getEmail
    };
};


module.exports = Facebook;