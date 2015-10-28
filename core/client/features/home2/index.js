module.exports = function (app) {
    require("./styles.css");
    require('../../services/people.service.js')(app);
    require('../../services/people.factory.js')(app);
    require('./home2.controller')(app);
};