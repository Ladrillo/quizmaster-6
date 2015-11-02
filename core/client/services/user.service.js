module.exports = function (app) {
    app.service('userService', [userService]);

    function userService() {

        this.user = window.user;
    }
};