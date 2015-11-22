module.exports = function (app) {

    app.service('userService', ['$q', '$http', userService]);


    function userService($q, $http) {

        this.patchUser = function (quiz, user) {

            return $http.patch('/api/users/' + user._id + '?quiz=' + quiz._id)
                .then(function (result) {
                    return result;
                });
        };


        this.listOneUser = function (user) {
            
            return $http.get('/api/users' + user._id)
                .then(function (result) {
                    return result;
                });
        };
    }
};