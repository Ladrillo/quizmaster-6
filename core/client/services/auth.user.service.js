module.exports = function (app) {

    app.service('authUserService', ['$rootScope', '$http', authUserService]);

    function authUserService($rootScope, $http) {

        this.user = window.user;
    }
};