// ENVIRONMENT VARIABLES
module.exports = {
    db: "mongodb://user:password@ds037814.mongolab.com:37814/quizmaster-6",
    sessionSecret: "productionSessionSecret",
    google: {
        clientID: "419787304121-0h5tfaol93fsrahr3ev0pvfs9j072trc.apps.googleusercontent.com",
        clientSecret: "XWSe_3RYz39-nj2gb7dZcar6",
        callbackURL: "https://pure-dusk-8896.herokuapp.com/auth/google/oauth2redirect"
    },
    facebook: {
        clientID: "1650698701877589",
        clientSecret: "5867845d19853b971de8e96c60070430",
        callbackURL: "https://pure-dusk-8896.herokuapp.com/auth/facebook/oauth2redirect",
        enableProof: false,
        passReqToCallback: true,
        profileFields: ["emails"]
    }
};
