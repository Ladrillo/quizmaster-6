module.exports = function (app) {

    app.service('appstate', ['$rootScope', appstate]);

    function appstate($rootScope) {

        var state = {
            currentQuiz: {},
            currentTest: {},
            selectedQuizzes: [],
            composingTest: false
        };


        this.getCurrentQuiz = function () {
            return state.currentQuiz;
        };


        this.getCurrentTest = function () {
            return state.currentTest;
        };


        this.setCurrentQuiz = function (quiz) {
            state.currentQuiz = quiz;
        };


        this.setCurrentTest = function (test) {
            state.currentTest = test;
        };


        this.addToSelectedQuizzes = function (quiz) {
            state.selectedQuizzes.push(quiz);
        };


        this.removeFromSelectedQuizzes = function (quiz) {
            state.selectedQuizzes.splice(state.selectedQuizzes.indexOf(quiz), 1);
        };


        this.getSelectedQuizzes = function () {
            return state.selectedQuizzes;
        };


        this.flipComposingTest = function () {
            state.composingTest = !state.composingTest;
        };


    }
};