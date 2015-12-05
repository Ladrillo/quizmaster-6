module.exports = function (app) {

    app.controller('testeditController',
        [
            '$scope',
            '$state',
            '$stateParams',
            'authUserService',
            'quizService',
            'testService',
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
        testService,
        userService,
        appstate,
        $mdDialog) {


        $scope.user = authUserService.user;

        listQuizzesEditing();


        // new or edit logic
        if ($stateParams.test === 'new') {
            $scope.creatingOrUpdating = 'New';

            // the quizzes array is populated asynchronously
            $scope.testInProgress = {
                title: "",
                quizzes: [],
                creator: $scope.user._id
            };

            appstate.setStateFrom({
                state: 'testedit',
                params: {
                    test: 'new'
                }
            });
        }
        else {
            $scope.creatingOrUpdating = 'Update';
            $scope.testInProgress = appstate.getCurrentTest();
        }


        // brings up the quizzes marked to be included in a test
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
                                $scope.testInProgress.quizzes.push($scope.editingQuizzes[i]._id);
                            }
                            $scope.testInProgress.quizzes = $scope.editingQuizzes;
                        });
                });
        }

        function resetQuizzesEditing() {

            userService.resetEditing($scope.user);
        }


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


        // validating form and creating new test
        function validateTestInProgress(test) {

            if (test.title.length > 0 && test.quizzes.length > 0) return true;
            return false;
        }

        $scope.createOrUpdateTest = function () {

            console.log('creating new test');

            var validates = validateTestInProgress($scope.testInProgress);

            if (validates) {
                if ($scope.creatingOrUpdating === 'New') {
                    testService.createTest($scope.testInProgress)
                        .then(function (response) {

                            resetQuizzesEditing();
                            $state.go('testlist');
                        });
                }
                else if ($scope.creatingOrUpdating === 'Update') {
                    testService.updateTest($scope.testInProgress)
                        .then(function (response) {

                            resetQuizzesEditing();
                            $state.go('testlist');
                        });
                }
            }
            else $scope.flashMessage = "The form is not filled-out completely";
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