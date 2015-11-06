// ENVIRONMENT VARIABLES
module.exports = {
    db: '',
    sessionSecret: 'developmentSessionSecret',
    google: {
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:5000/auth/google/oauth2redirect"
    },
};
