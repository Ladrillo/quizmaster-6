// routes of our RESTful API
var Ctrl = require('./test.server.controller');

module.exports = function (app) {

    app.route('/api/tests')
        .post(Ctrl.postTest)
        .get(Ctrl.getTests);

    app.route('/api/tests/:id')
        .get(Ctrl.getOneTest)
        .put(Ctrl.putTest)
        .delete(Ctrl.deleteTest);
};