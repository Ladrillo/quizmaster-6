// ENVIRONMENT VARIABLES
module.exports = {
    db: 'mongodb://user:password@ds037814.mongolab.com:37814/quizmaster-6',
    sessionSecret: 'productionSessionSecret',
    google: {
        clientID: "419787304121-0h5tfaol93fsrahr3ev0pvfs9j072trc.apps.googleusercontent.com",
        clientSecret: "XWSe_3RYz39-nj2gb7dZcar6",
        callbackURL: "http://localhost:5000/auth/google/oauth2redirect"
    },
};
