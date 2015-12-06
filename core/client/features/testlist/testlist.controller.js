module.exports = function (app) {

    app.controller('testlistController',
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
            testlistController
        ]);

    function testlistController(
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

        function listTests() {

            testService.listAllTests()
                .then(function (response) {
                    $scope.tests = response;
                });
        }
        listTests();


        // crud

        $scope.destroyTest = function (test) {

            testService.destroyTest(test)
                .then(function (response) {
                    listTests();
                });
        };


    }
};