module.exports = function (app) {

    app.service('authUserService',
        [
            '$rootScope',
            authUserService
        ]);

    function authUserService($rootScope) {

        this.user = window.user;
        console.log(this.user);
    }
};