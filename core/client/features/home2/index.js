module.exports = function (app) {
    require("./styles.css");
    require('../../services/people.service.js')(app);
    require('./home.controller')(app);
};