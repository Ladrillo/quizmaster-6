module.exports = function (app) {

    app.service('userService', ['$q', '$http', userService]);


    function userService($q, $http) {

        // we hit that endpoint to push a quiz into editing array
        this.updateSelected = function (quiz, user) {

            return $http.patch('/api/users/' + user._id + '?quiz=' + quiz._id)
                .then(function (result) {
                    console.log('userService.updateSelected(quiz, user) ', result.data);
                    return result.data;
                });
        };


        // we need this to get user with 'up to date' editing array
        this.listOneUser = function (user) {

            return $http.get('/api/users/' + user._id)
                .then(function (result) {
                    console.log('userService.listOneUser(user): ', result.data);
                    return result.data;
                });
        };
    }
};