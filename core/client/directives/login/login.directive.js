module.exports = function (app) {

    app.directive('quizLogin', [quizLogin]);

    function quizLogin() {

        return {
            template: require('./login.template.html'),

            scope: {
                user: "=",
                shit: "="
            },

            controller: function ($scope, $mdDialog) {

                $scope.choosingStrategy = false;
                $scope.chooseStrategy = function () {
                    $scope.choosingStrategy = !$scope.choosingStrategy;
                };
            }
        };
    }
};