module.exports = function (app) {

    app.controller('homeController',
        [
            '$scope',
            '$state',
            '$http',
            '$rootScope',
            'authUserService',
            '$mdDialog',
            homeController
        ]);

    function homeController(
        $scope,
        $state,
        $http,
        $rootScope,
        authUserService,
        $mdDialog) {

        $scope.user = authUserService.user;

    }

};