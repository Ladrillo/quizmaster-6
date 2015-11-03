module.exports = function (app) {
    
    require("./styles.css");
    require('../../services/people.service')(app);
    require('../../services/people.factory')(app);
    require('../../services/auth.user.service')(app);
    require('./home.controller')(app);
};  