module.exports = function (app) {

    app.directive('quizTile', [quizTile]);

    function quizTile() {

        return {
            template: require('./quiztile.template.html'),

            scope: {
                user: "=",
                quiz: "="
            },

            controller: function ($scope) {

            }
        };
    }
};
