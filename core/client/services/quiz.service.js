module.exports = function (app) {

    app.service('quizService',
        [
            '$q',
            '$http',
            '$rootScope',
            quizService
        ]);

    function quizService($q, $http, $rootScope) {

        this.createQuiz = function (quiz) {

            return $http.post('/api/quizzes', quiz)
                .then(function (data) {

                    console.log(data);
                    return "quiz created";
                });
        };

        this.listAllQuizzes = function () {

            return $http.get('/api/quizzes')
                .then(function (data) {

                    console.log(data.data);
                    return data.data;
                });
        };

        this.destroyQuiz = function (quizId) {

            return $http.delete('/api/quizzes/' + quizId)
                .then(function (data) {

                    console.log(data);
                });
        };
    }
};