module.exports = function (app) {

    app.controller('homeController',
        [
            '$scope',
            '$state',
            '$http',
            '$rootScope',
            'authUserService',
            '$mdDialog',
            homeController
        ]);

    function homeController(
        $scope,
        $state,
        $http,
        $rootScope,
        authUserService,
        $mdDialog) {

        $scope.user = authUserService.user;

        $http.get("https://api.imgur.com/3/gallery/random/random/0")
            .success(function (data) {
                var jsonString = angular.toJson(data.data[0]);
                console.log(jsonString);
            });

        $(document).on('click', function () {
            $('.my-red').css('color', 'black');
        });

    }

};