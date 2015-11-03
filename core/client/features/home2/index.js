module.exports = function (app) {
    
    require("./styles.css");
    require('../../services/people.service')(app);
    require('../../services/people.factory')(app);
    require('./home2.controller')(app);
};