module.exports = function (app) {

    app.controller('quizlistController',
        [
            '$scope',
            '$stateParams',
            '$rootScope',
            'authUserService',
            'quizService',
            '$mdDialog',
            quizlistController
        ]);

    function quizlistController(
        $scope,
        $stateParams,
        $rootScope,
        authUserService,
        quizService,
        $mdDialog) {


        // authentication
        $scope.user = authUserService.user;

        $scope.test = 'test';

        $scope.listAllQuizzes = quizService.listAllQuizzes()
            .then(function (response) {
                console.log(response);
                $scope.quizzes = response;
            });

    }

};