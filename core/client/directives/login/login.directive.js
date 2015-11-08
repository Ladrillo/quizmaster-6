module.exports = function (app) {

    app.directive('quizLogin',
        [   
            '$state',
            '$http',
            '$rootScope',
            'authUserService',
            '$mdDialog',
            quizLogin
        ]);

    function quizLogin(
        $state,
        $http,
        $rootScope,
        authUserService,
        $mdDialog) {

            return {
                template: require('./login.template.html'),

                controller: function ($scope) {

                    $scope.user = authUserService.user;
                }
            };
    }

};