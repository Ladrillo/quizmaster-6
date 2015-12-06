module.exports = function (app) {

    app.service('quizService', ['$q', '$http', quizService]);


    function quizService($q, $http) {

        this.createQuiz = function (quiz) {

            return $http.post('/api/quizzes', quiz)
                .then(function (data) {

                    console.log('quizService.createQuiz(quiz): ', data);
                    return "quiz created";
                });
        };


        this.listAllQuizzes = function () {

            return $http.get('/api/quizzes')
                .then(function (data) {

                    console.log('quizService.listAllQuizzes(): ', data.data);
                    return data.data;
                });
        };


        this.destroyQuiz = function (quizId) {

            return $http.delete('/api/quizzes/' + quizId)
                .then(function (data) {

                    console.log('quizService.delete(quizId): ', data.data);
                });
        };


        this.updateQuiz = function (quiz) {

            return $http.put('/api/quizzes/' + quiz._id, quiz)
                .then(function (data) {

                    console.log('quizService.updateQuiz(quiz): ', data);
                });
        };


        this.listQuizzesEditing = function (editing) {

            return $http.post('/api/quizzes/editing', editing)
                .then(function (data) {

                    console.log('quizService.listQuizzesEditing(editing): ', data.data);
                    return data.data;
                });
        };
    }
};