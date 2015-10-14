module.exports = function (app) {
    require('./contact.controller')(app);
    require('../../services/tickets.service')(app);

};