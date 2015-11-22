module.exports = function (app) {

    app.service('authUserService', ['$rootScope', '$http', authUserService]);

    function authUserService($rootScope, $http) {

        this.user = window.user;

//         this.user = function () {
//
//             return $http.get('/api/users/' + window.user._id)
//                 .then(function (response) {
//                     return response;
//                 });
//         };
    }
};