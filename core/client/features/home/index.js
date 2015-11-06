module.exports = function (app) {

    require("./styles.css");
    require('../../services/auth.user.service')(app);
    require('./home.controller')(app);
};