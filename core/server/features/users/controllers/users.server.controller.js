// var User = require('mongoose').model('User');
// 
// exports.postUser = function (req, res, next) {
//     var user = new User(req.body);
//     user.save(function (err) {
//         if (err) res.send(err);
//         else res.json(user);
//     });
// };

exports.sayHello = function (req, res, next) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    console.log(req.session.lastVisit);

    res.json(req.session);
};