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
            

        // authentication
        $scope.user = authUserService.user;
        
        
        // new or edit logic
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
        $scope.tempFalsy = "";
        $scope.truthies = [];
        $scope.falsies = [];

        var truthies = $scope.truthies,
            falsies = $scope.falsies;

        $scope.addToOptions = function (option, i) {

            if (option !== "" && truthies.indexOf(option) === -1 && falsies.indexOf(option) === -1) {
                if (i === 'truthy') {
                    truthies.push(option);
                    $scope.tempTruthy = "";
                }
                else if (i === 'falsy') {
                    falsies.push(option);
                    $scope.tempFalsy = "";
                }
            }
        };

        $scope.editOption = function (option, i) {

            if (i === 'truthy') {
                truthies.splice(truthies.indexOf(option), 1);
                if ($scope.tempTruthy) $scope.addToOptions($scope.tempTruthy, 'truthy');
                $scope.tempTruthy = option;
            }
            else if (i === 'falsy') {
                falsies.splice(falsies.indexOf(option), 1);
                if ($scope.tempFalsy) $scope.addToOptions($scope.tempFalsy, 'falsy');
                $scope.tempFalsy = option;
            }
        };


        // debugging
        $scope.logQuizInProgress = function () {
            $scope.quizInProgress.truthies = $scope.truthies;
            $scope.quizInProgress.falsies = $scope.falsies;
            console.log($scope.quizInProgress);
        };
    }

};