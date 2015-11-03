module.exports = function (app) {
    
    app.service('peopleService', [peopleService]);

    function peopleService() {

        this.people = ['Brian', 'John', 'Anne'];

        this.pushToService = function (str) {
            this.people.push(str);
        };
    }
};