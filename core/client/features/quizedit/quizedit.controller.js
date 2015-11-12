module.exports = function (app) {

    app.controller('quizeditController',
        [
            '$scope',
            '$stateParams',
            '$http',
            '$rootScope',
            'authUserService',
            '$mdDialog',
            quizeditController
        ]);

    function quizeditController(
        $scope,
        $stateParams,
        $http,
        $rootScope,
        authUserService,
        $mdDialog) {

        // preliminaries
        $scope.user = authUserService.user;
        $scope.quizInProgress = $scope.quizInProgress || { tags: [] };

        if ($stateParams.quiz === 'new') {
            $scope.creatingOrUpdating = 'New';
        }
        else {
            $scope.creatingOrUpdating = 'Edit';
        }

        // required for chips to work
        $scope.readOnly = false;

        // truthy and falsy block
        $scope.tempTruthy = "";
        $scope.truthies = [];

        $scope.addToTruthies = function () {
            $scope.truthies.push($scope.tempTruthy);
            $scope.tempTruthy = "";
        };

        // debugging
        $scope.logQuizInProgress = function () {
            $scope.quizInProgress.truthies = $scope.truthies;
            console.log($scope.quizInProgress);
        };
    }

};