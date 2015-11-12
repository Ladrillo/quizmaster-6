// routes of our RESTful API
var quizzesCtrl = require('./quiz.server.controller');

module.exports = function (app) {
    
    app.route('/api/quizzes')
        .post(quizzesCtrl.postQuiz)
        .get(quizzesCtrl.getQuizzes);

    app.route('/api/quizzes/:id')
        .get(quizzesCtrl.getOneQuiz)
        .put(quizzesCtrl.putQuiz)
        .delete(quizzesCtrl.deleteQuiz);
};