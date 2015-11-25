module.exports = function (app) {

    app.service('appstate', ['$rootScope', appstate]);

    function appstate($rootScope) {

        var state = {
            currentQuiz: {},
            stateFrom: {
                state: "",
                params: {}
            }
        };


        this.getCurrentQuiz = function () {
            return state.currentQuiz;
        };

        this.setCurrentQuiz = function (quiz) {
            state.currentQuiz = quiz;
        };

        this.setStateFrom = function (stateFrom) {
            state.stateFrom = stateFrom;
        };

        this.getStateFrom = function () {
            return state.stateFrom;
        };
    }
};