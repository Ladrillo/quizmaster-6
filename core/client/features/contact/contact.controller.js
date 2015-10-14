module.exports = function (app) {
    app.controller('contactController', [
        '$scope',
        '$resource',
        'ticketsResource',
        contactController]);

    function contactController($scope, $resource, ticketsResource) {
        $scope.tickets = ticketsResource.query();


    }
};