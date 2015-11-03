module.exports = function (app) {
    
    app.service('authUserService',
        [
            authUserService
        ]);

    function authUserService() {

        this.user = window.user;
    }

};