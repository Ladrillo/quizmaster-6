module.exports = function (app) {

    app.service('testService', ['$q', '$http', testService]);


    function testService($q, $http) {

        this.createTest = function (test) {

            return $http.post('/api/tests', test)
                .then(function (data) {

                    console.log('testService.createTest: ', data);
                    return "test created";
                });
        };


        this.listAllTests = function () {

            return $http.get('/api/tests')
                .then(function (data) {

                    // console.log(data.data);
                    return data.data;
                });
        };


        this.destroyTest = function (testId) {

            return $http.delete('/api/tests/' + testId)
                .then(function (data) {

                    console.log(data);
                });
        };


        this.updateTest = function (test) {

            return $http.put('/api/tests/' + test._id, test)
                .then(function (data) {

                    console.log(data);
                });
        };


        this.listTestsEditing = function (editing) {

            return $http.post('/api/tests/editing', editing)
                .then(function (data) {
                    console.log(data.data);
                    return data.data;
                });
        };
    }
};