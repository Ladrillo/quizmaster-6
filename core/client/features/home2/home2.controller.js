module.exports = function (app) {
    app.controller('home2Controller',
        [
            '$scope',
            '$http',
            '$rootScope',
            'peopleService',
            'peopleFactory',
            home2Controller
        ]);

    function home2Controller($scope, $http, $rootScope, peopleService, peopleFactory) {

        $scope.test = "this is a test of the home2 view";
        $scope.people = peopleService.people;
        $scope.people2 = peopleFactory.people;

        $scope.pushToService = function (newPerson) {
            peopleService.pushToService(newPerson);
        };

        $scope.pushToFactory = function (newPerson) {
            peopleFactory.pushToFactory(newPerson);
        };

        $(document).on('click', function () {
            $('.my-red').css('color', 'blue');
        });

    }

};