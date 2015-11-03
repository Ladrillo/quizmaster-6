module.exports = function (app) {
    
    app.controller('homeController',
        [
            '$scope',
            '$http',
            '$rootScope',
            'peopleService',
            'peopleFactory',
            'authUserService',
            homeController
        ]);

    function homeController($scope, $http, $rootScope, peopleService, peopleFactory, authUserService) {
        
        $scope.user = authUserService.user;
        $scope.userFromWindow = window.user;
        $scope.myDisabled = true;
        
        $scope.test = "this is a test of the home view";
        $scope.people = peopleService.people;
        $scope.people2 = peopleFactory.people;

        $scope.pushToService = function (newPerson) {
            peopleService.pushToService(newPerson);
        };

        $scope.pushToFactory = function (newPerson) {
            peopleFactory.pushToFactory(newPerson);
        };


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