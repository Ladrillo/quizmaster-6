module.exports = function (app) {

    app.directive('flashMessage', [flashMessage]);

    function flashMessage() {

        return {
            template: require('./flash.template.html'),

            scope: {
                flashMessage: "="
            },

            controller: function ($scope) {

            }
        };
    }
};