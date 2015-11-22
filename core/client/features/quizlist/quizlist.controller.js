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

        var findCurrentUser = function () {
            authUserService.user()
                .then(function (response) {
                    $scope.user = response;
                });
        };


        // crud operations
        $scope.listAllQuizzes = function () {

            quizService.listAllQuizzes()
                .then(function (response) {

                    var quizzes = response;
                    for (var i in quizzes) {
                        if ($scope.user.editing.indexOf(quizzes[i]._id) !== -1) {
                            quizzes[i].isSelected = true;
                        }
                    }
                    $scope.quizzes = quizzes;
                });
        };
        $scope.listAllQuizzes();


        $scope.editQuiz = function (quiz) {

            appstate.setCurrentQuiz(quiz);
            $state.go('quizedit', { quiz: quiz._id });
        };


        $scope.destroyQuiz = function (id) {

            quizService.destroyQuiz(id)
                .then(function (response) {

                    $scope.listAllQuizzes();
                });
        };


        // checkbox hell
        $scope.addOrRemoveFromSelectedQuizzes = function (quiz) {

            userService.patchUser(quiz, $scope.user);
        };
    }
};