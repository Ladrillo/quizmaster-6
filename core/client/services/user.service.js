module.exports = function (app) {

    app.service('userService', ['$q', '$http', userService]);


    function userService($q, $http) {

        this.updateSelected = function (quiz, user) {

            return $http.patch('/api/users/' + user._id + '?quiz=' + quiz._id)
                .then(function (result) {
                    console.log('editing array actualizada...', result.data);
                    return result.data;
                });
        };


        this.listOneUser = function (user) {

            return $http.get('/api/users/' + user._id)
                .then(function (result) {
                    console.log('usuario: ', result.data);
                    return result.data;
                });
        };
    }
};