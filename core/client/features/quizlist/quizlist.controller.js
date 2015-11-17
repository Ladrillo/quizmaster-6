module.exports = function (app) {

    app.controller('quizlistController',
        [
            '$scope',
            '$state',
            '$stateParams',
            'authUserService',
            'quizService',
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
        appstate,
        $mdDialog) {


        $scope.user = authUserService.user;


        $scope.listAllQuizzes = function () {

            quizService.listAllQuizzes()
                .then(function (response) {

                    $scope.quizzes = response;
                });
        };

        $scope.listAllQuizzes();


        $scope.destroyQuiz = function (id) {

            quizService.destroyQuiz(id)
                .then(function (response) {

                    $scope.listAllQuizzes();
                });
        };


        $scope.editQuiz = function (quiz) {
            
            appstate.setCurrentQuiz(quiz);
            $state.go('quizedit', { quiz: quiz._id });
        };


    }
};