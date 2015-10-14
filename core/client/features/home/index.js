module.exports = function (app) {
    require('../../services/people.service.js')(app);
    require('./home.controller')(app);
};