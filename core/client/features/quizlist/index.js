module.exports = function (app) {

    require('../../services/quiz.service')(app);
    require('./quizlist.controller')(app);
};