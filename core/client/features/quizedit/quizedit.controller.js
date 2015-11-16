module.exports = function (app) {

    app.controller('quizeditController',
        [
            '$scope',
            '$stateParams',
            '$http',
            '$rootScope',
            'authUserService',
            'quizService',
            '$mdDialog',
            quizeditController
        ]);

    function quizeditController(
        $scope,
        $stateParams,
        $http,
        $rootScope,
        authUserService,
        quizService,
        $mdDialog) {


        // authentication
        $scope.user = authUserService.user;


        // new or edit logic
        if ($stateParams.quiz === 'new') {
            $scope.creatingOrUpdating = 'New';

            $scope.quizInProgress = {
                instructions: "",
                stem: "",
                truthies: [],
                falsies: [],
                tags: [],
                stats: {},
                creator: $scope.user._id
            };
        }

        else {
            $scope.creatingOrUpdating = 'Edit';
        }

        // required for chips to work
        $scope.readOnly = false;


        // truthy and falsy block
        var truthies = $scope.quizInProgress.truthies,
            falsies = $scope.quizInProgress.falsies;

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


        // crud operations
        $scope.createOrUpdateQuiz = function () {

            if ($scope.creatingOrUpdating === 'New') {
                quizService.createQuiz($scope.quizInProgress)
                    .then(function (response) {
                        console.log(response);
                    });
            }
        };

        $scope.listAllQuizzes = function () {

            quizService.listAllQuizzes()
                .then(function (response) {

                    console.log(response);
                });
        };


        // debugging
        $scope.logQuizInProgress = function () {
                console.log($scope.quizInProgress);
            };
    }

};