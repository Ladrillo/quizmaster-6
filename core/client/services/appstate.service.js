module.exports = function (app) {

    app.service('appstate', ['$rootScope', appstate]);

    function appstate($rootScope) {

        var state = {
            currentQuiz: {},
            currentTest:{},
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

        this.getCurrentTest = function () {
            return state.currentTest;
        };

        this.setCurrentTest = function (test) {
            state.currentTest = test;
        };

        this.setStateFrom = function (stateFrom) {
            state.stateFrom = stateFrom;
        };

        this.getStateFrom = function () {
            return state.stateFrom;
        };
    }
};