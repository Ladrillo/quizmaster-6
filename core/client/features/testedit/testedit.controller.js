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

        $scope.user = authUserService.user;

        if ($stateParams.test === 'new') {
            appstate.setStateFrom({
                state: 'testedit',
                params: {
                    test: 'new'
                }
            });
        }


        function listQuizzesEditing() {

            $scope.selectedQuizzes = [];

            userService.listOneUser($scope.user)
                .then(function (response) {

                    var selectedQuizzesIds = { editing: response.editing };

                    quizService.listQuizzesEditing(selectedQuizzesIds)
                        .then(function (response) {

                            $scope.editingQuizzes = response;
                            for (var i in $scope.editingQuizzes) {
                                $scope.editingQuizzes[i].isSelected = true;
                            }
                        });
                });
        }
        listQuizzesEditing();


        // crud operations
        $scope.editQuiz = function (quiz) {

            appstate.setCurrentQuiz(quiz);
            $state.go('quizedit', { quiz: quiz._id });
        };


        $scope.destroyQuiz = function (id) {

            quizService.destroyQuiz(id)
                .then(function (response) {

                    listQuizzesEditing();
                });
        };


        // pushing or splicing a quiz from the user's editing array
        $scope.addOrRemoveFromSelectedQuizzes = function (quiz) {

            userService.updateSelected(quiz, $scope.user)
                .then(function (response) {

                    listQuizzesEditing();
                });
        };
    }
};