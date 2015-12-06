module.exports = function (app) {

    app.directive('flashMessage', [flashMessage]);

    function flashMessage() {

        return {
            template: require('./flash.template.html'),

            scope: {
                flash: "="
            }
        };
    }
};