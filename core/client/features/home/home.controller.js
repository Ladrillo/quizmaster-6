module.exports = function (app) {

    app.controller('homeController',
        [
            '$scope',
            '$state',
            '$http',
            'authUserService',
            '$mdDialog',
            homeController
        ]);

    function homeController(
        $scope,
        $state,
        $http,
        authUserService,
        $mdDialog) {

            $scope.user = authUserService.user;
    }

};