// routes of our RESTful API
var Ctrl = require('./user.server.controller');

module.exports = function (app) {

    app.route('/api/users')
        .get(Ctrl.getUsers);

    app.route('/api/users/:id')
        .patch(Ctrl.patchUser)
        .get(Ctrl.getOneUser);

    app.route('/api/users/:id/reset')
        .patch(Ctrl.resetEditing);

};