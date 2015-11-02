module.exports = function (app) {
    require('../../services/user.service.js')(app);
    require('./user.controller')(app);
};