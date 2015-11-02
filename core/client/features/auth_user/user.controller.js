module.exports = function (app) {
    app.controller('userController',
        [
            '$scope',
            '$http',
            '$rootScope',
            'userService',
            userController
        ]);

    function userController($scope, $http, $rootScope, userService) {
        
        
    }

};