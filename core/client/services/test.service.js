module.exports = function (app) {

    app.service('testService', ['$q', '$http', testService]);


    function testService($q, $http) {

        this.createTest = function (test) {

            return $http.post('/api/tests', test)
                .then(function (data) {

                    console.log('testService.createTest(test): ', data.data);
                    return data.data;
                });
        };


        this.listAllTests = function () {

            return $http.get('/api/tests')
                .then(function (data) {

                    console.log('testService.listAllTests(): ', data.data);
                    return data.data;
                });
        };


        this.destroyTest = function (test) {

            return $http.delete('/api/tests/' + test._id)
                .then(function (data) {

                    console.log('testService.destroyTest(test): ', data.data);
                    return data.data;
                });
        };


        this.updateTest = function (test) {

            return $http.put('/api/tests/' + test._id, test)
                .then(function (data) {

                    console.log('testService.destroyTest(test): ', data.data);
                    return data.data;
                });
        };
    }
};