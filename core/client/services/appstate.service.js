module.exports = function (app) {

    app.service('appstate', ['$rootScope', appstate]);

    function appstate($rootScope) {

        var state = {
            currentQuiz: {},
            currentTest: {}  
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
    }
};