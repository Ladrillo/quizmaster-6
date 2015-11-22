var User = require('./user.server.model'),
    Quiz = require('../quiz/quiz.server.model');

exports.patchUser = function (req, res, next) {

    User.findById(req.params.id)
        .exec(function (err, user) {

            if (req.query.quiz) {
                Quiz.findById(req.query.quiz)
                    .exec(function (err, quiz) {

                        if (user.editing.indexOf(quiz._id) === -1) {
                            user.editing.push(quiz);
                        }
                        else {
                            user.editing.splice(user.editing.indexOf(quiz._id), 1);
                        }

                        user.save(function (err, user) {

                            if (err) res.status(500).send(err);
                            else res.json(user);
                        });
                    });
            }
        });
};


exports.getOneUser = function (req, res, next) {

    User.findById(req.params.id)
        .exec(function (err, user) {

            if (err) res.status(500).send(err);
            else res.json(user);
        });
};