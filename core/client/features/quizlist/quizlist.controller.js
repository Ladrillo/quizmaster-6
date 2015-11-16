module.exports = function (app) {

    app.controller('quizlistController',
        [
            '$scope',
            '$stateParams',
            'authUserService',
            'quizService',
            '$mdDialog',
            quizlistController
        ]);

    function quizlistController(
        $scope,
        $stateParams,
        authUserService,
        quizService,
        $mdDialog) {


        // authentication
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


    }
};