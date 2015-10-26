module.exports = function (app) {
    app.service('peopleService', [peopleService]);


    function peopleService() {
        this.people = ['Brian', 'John', 'Anne'];
    }
};