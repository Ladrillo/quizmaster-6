// routes of our RESTful API
var Ctrl = require('./user.server.controller');

module.exports = function (app) {

    app.route('/api/users/:id')
        .patch(Ctrl.patchUser)
        .get(Ctrl.getOneUser);

};