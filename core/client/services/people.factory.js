module.exports = function (app) {
    app.factory('peopleFactory', [peopleFactory]);


    function peopleFactory() {

        var fact = {};
        fact.people = ['Gabe', 'Luis', 'Miles'];

        fact.pushToFactory = function (str) {
            fact.people.push(str);
        };

        return fact;

    }
};