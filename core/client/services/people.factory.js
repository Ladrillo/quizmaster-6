module.exports = function (app) {
    app.factory('schoolsFactory', [schoolsFactory]);


    function schoolsFactory() {
        
        var fact = {};        
        fact.people = ['DevMountain', 'HackReactor', 'DevBootcamp'];
        return fact;
        
    }
};