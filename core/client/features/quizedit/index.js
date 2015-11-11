module.exports = function (app) {

    require('../../services/auth.user.service')(app);
    require('../../directives/login/login.directive')(app);
    require('../../directives/menu/menu.directive')(app);
    require('./quizedit.controller')(app);
};