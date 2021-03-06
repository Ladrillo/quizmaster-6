var User = require('./user.server.model'),
    Quiz = require('../quiz/quiz.server.model'),
    Test = require('../test/test.server.model');


exports.getUsers = function (req, res, next) {

    User.find({})
        .exec(function (err, users) {

            if (err) res.status(500).send(err);
            else res.json(users);
        });
};


exports.getOneUser = function (req, res, next) {

    User.findById(req.params.id)
        .populate('editing')
        .exec(function (err, user) {

            if (err) res.status(500).send(err);
            else res.json(user);
        });
};


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

            else if (req.query.test) {
                Test.findById(req.query.test)
                    .exec(function (err, test) {

                        user.editing = [];

                        test.quizzes.forEach(function (quiz) {
                            user.editing.push(quiz);
                        });

                        user.save(function (err, user) {

                            if (err) res.status(500).send(err);
                            else res.json(user);
                        });
                    });
            }
        });
};


exports.resetEditing = function (req, res, next) {

    User.findById(req.params.id)
        .exec(function (err, user) {
            if (err) res.status(500).send(err);
            else {
                user.editing = [];
                user.save(function (err, user) {

                    if (err) res.status(500).send(err);
                    else res.json(user);
                });
            }
        });
};