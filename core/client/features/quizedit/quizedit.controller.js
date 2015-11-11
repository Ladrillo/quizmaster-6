module.exports = function (app) {

    app.controller('quizeditController',
        [
            '$scope',
            '$state',
            '$http',
            '$rootScope',
            'authUserService',
            '$mdDialog',
            quizeditController
        ]);

    function quizeditController(
        $scope,
        $state,
        $http,
        $rootScope,
        authUserService,
        $mdDialog) {

        $scope.user = authUserService.user;
    }

};