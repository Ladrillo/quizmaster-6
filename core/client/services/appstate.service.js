module.exports = function (app) {

    app.service('appstate', ['$rootScope', appstate]);

    function appstate($rootScope) {

        var state = {
            currentQuiz: {},
            // currentTest: {},
        };


        this.getCurrentQuiz = function () {
            return state.currentQuiz;
        };


        this.setCurrentQuiz = function (quiz) {
            state.currentQuiz = quiz;
        };


//         function idsArray(quizzes) {
//
//             var ids = [];
//             quizzes.forEach(function (q) {
//                 ids.push(q._id);
//             });
//             return ids;
//         }
//
//
//         this.addOrRemoveFromSelectedQuizzes = function (quiz) {
//             if (state.selectedQuizzes.length === 0) {
//                 state.selectedQuizzes.push(quiz);
//             }
//             else {
//                 var selectedQ = idsArray(state.selectedQuizzes);
//                 if (selectedQ.indexOf(quiz._id) === -1) {
//                     state.selectedQuizzes.push(quiz);
//                 }
//                 else {
//                     for (var i in state.selectedQuizzes) {
//                         if (state.selectedQuizzes[i] === quiz._id) {
//                             state.selectedQuizzes.splice(i, 1);
//                         }
//                     }
//                 }
//             }
//         };
//
//
//         this.getSelectedQuizzesIds = function () {
//
//             var ids = [];
//             if (state.selectedQuizzes.length === 0) return ids;
//             else {
//                 state.selectedQuizzes.forEach(function (q) {
//                     ids.push(q._id);
//                 });
//                 return ids;
//             }
//         };
//
//
//         this.flipComposingTest = function () {
//             state.composingTest = !state.composingTest;
//         };


    }
};