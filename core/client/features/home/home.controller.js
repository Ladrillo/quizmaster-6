module.exports = function (app) {

    app.controller('homeController',
        [
            '$scope',
            '$state',
            '$http',
            '$rootScope',
            'authUserService',
            homeController
        ]);

    function homeController(
        $scope,
        $state,
        $http,
        $rootScope,
        authUserService) {

        $scope.user = authUserService.user;

    }

};