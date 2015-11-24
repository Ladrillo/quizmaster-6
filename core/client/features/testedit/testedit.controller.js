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
        
        
        // checkbox hell

        $scope.addOrRemoveFromSelectedQuizzes = function (quiz) {

            userService.updateSelected(quiz, $scope.user)
                .then(function (response) {

                    listQuizzesEditing();
                });
        };
    }
};