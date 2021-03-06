var OAuth = require('oauth').OAuth2;

module.exports = function (facebookKey, facebookSecret) {

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

    var getFacebookData = function (userKey, done) {

        oauth.get('https://graph.facebook.com/v2.5/me?fields=picture,email',
            userKey,
            function (err, results, res) {

                results = JSON.parse(results);
                done(results);
            });
    };

    return {
        getFacebookData: getFacebookData
    };
};