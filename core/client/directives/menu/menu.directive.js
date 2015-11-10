module.exports = function (app) {

    app.directive('quizMenu', [quizMenu]);

    function quizMenu() {

        return {
            template: require('./menu.template.html'),

            scope: {
                user: "="
            },

            controller: function ($scope) {

            }
        };
    }
};