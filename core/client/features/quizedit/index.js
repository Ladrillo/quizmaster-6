module.exports = function (app) {

    require('../../services/quiz.service')(app);
    require('./quizedit.controller')(app);
};