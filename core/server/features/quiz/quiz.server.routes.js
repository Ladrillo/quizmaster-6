// routes of our RESTful API
var Ctrl = require('./quiz.server.controller');

module.exports = function (app) {

    app.route('/api/quizzes')
        .post(Ctrl.postQuiz)
        .get(Ctrl.getQuizzes);

    app.route('/api/quizzes/:id')
        .get(Ctrl.getOneQuiz)
        .put(Ctrl.putQuiz)
        .delete(Ctrl.deleteQuiz);

    app.route('/api/quizzes/editing')
        .post(Ctrl.quizzesEditing);
};