module.exports = function (app) {

    app.controller('testeditController',
        [
            '$scope',
            '$state',
            '$stateParams',
            'authUserService',
            'quizService',
            'userService',
            'appstate',
            '$mdDialog',
            testeditController
        ]);

    function testeditController(
        $scope,
        $state,
        $stateParams,
        authUserService,
        quizService,
        userService,
        appstate,
        $mdDialog) {

        var listQuizzesEditing = function () {

            $scope.selectedQuizzes = [];

            userService.listOneUser($scope.user)
                .then(function (response) {
                    $scope.selectedQuizzesIds = response.editing;

                    $scope.selectedQuizzesIds.forEach(function (q) {



                    });
                });


        };
        
        // checkbox hell

        $scope.addOrRemoveFromSelectedQuizzes = function (quiz) {

            userService.updateSelected(quiz, $scope.user)
                .then(function (response) {

                    listQuizzesEditing();
                });
        };
    }
};