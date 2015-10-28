module.exports = function (app) {
    app.controller('homeController',
        [
            '$scope',
            '$http',
            '$rootScope',
            'peopleService',
            homeController
        ]);

    function homeController($scope, $http, $rootScope, peopleService) {

        $scope.test = "this is a test of the home view";
        $scope.people = peopleService.people;

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