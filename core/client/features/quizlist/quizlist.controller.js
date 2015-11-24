module.exports = function (app) {

    app.controller('quizlistController',
        [
            '$scope',
            '$state',
            '$stateParams',
            'authUserService',
            'quizService',
            'userService',
            'appstate',
            '$mdDialog',
            quizlistController
        ]);

    function quizlistController(
        $scope,
        $state,
        $stateParams,
        authUserService,
        quizService,
        userService,
        appstate,
        $mdDialog) {

        // grabbing user
        $scope.user = authUserService.user;
        
        if ($stateParams.display === 'mine') $scope.display = true;
        else $scope.display = false;
        

        function listQuizzes() {
            userService.listOneUser($scope.user)
                .then(function (response) {

                    $scope.selectedQuizzesIds = response.editing;

                    quizService.listAllQuizzes()
                        .then(function (response) {

                            $scope.quizzes = response;

                            if ($scope.selectedQuizzesIds.length > 0) {
                                for (var i in $scope.quizzes) {
                                    if ($scope.selectedQuizzesIds.indexOf($scope.quizzes[i]._id) !== -1) {
                                        $scope.quizzes[i].isSelected = true;
                                    }
                                }
                            }
                        });

                });
        }
        listQuizzes();  


        // crud operations
        $scope.editQuiz = function (quiz) {

            appstate.setCurrentQuiz(quiz);
            $state.go('quizedit', { quiz: quiz._id });
        };


        $scope.destroyQuiz = function (id) {

            quizService.destroyQuiz(id)
                .then(function (response) {

                    listQuizzes();
                });
        };


        // checkbox hell

        $scope.addOrRemoveFromSelectedQuizzes = function (quiz) {

            userService.updateSelected(quiz, $scope.user)
                .then(function (response) {

                    listQuizzes();
                });
        };
    }
};