var Quiz = require('./quiz.server.model');
var Test = require('../test/test.server.model');


exports.postQuiz = function (req, res, next) {

    var quiz = new Quiz(req.body);
    quiz.save(function (err, quiz) {

        if (err) res.send(err);
        else res.json(quiz);
    });
};


exports.getQuizzes = function (req, res, next) {

    Quiz.find({})
        .populate('creator')
        .exec(function (err, quizzes) {

            if (err) res.status(500).send(err);
            else res.json(quizzes);
        });
};


exports.getOneQuiz = function (req, res, next) {

    Quiz.findById(req.params.id)
        .populate('creator')
        .exec(function (err, quiz) {

            if (err) res.status(500).send(err);
            else res.json(quiz);
        });
};


exports.putQuiz = function (req, res, next) {

    Quiz.findById(req.params.id)
        .populate('creator')
        .exec(function (err, quiz) {

            if (err) res.status(500).send(err);
            else {
                var user = JSON.stringify(req.user._id),
                    creator = JSON.stringify(quiz.creator._id);

                if (user === creator) {
                    quiz.tags = req.body.tags;
                    quiz.instructions = req.body.instructions;
                    quiz.stem = req.body.stem;
                    quiz.truthies = req.body.truthies;
                    quiz.falsies = req.body.falsies;
                    quiz.save(function (err) {

                        if (err) res.status(500).send(err);
                        else res.status(204).json(quiz);
                    });
                }
                else {
                    res.send('You can\'t edit a quiz that\'s not yours!');
                }
            }
        });
};


exports.deleteQuiz = function (req, res, next) {

    Quiz.findById(req.params.id)
        .populate('creator')
        .exec(function (err, quiz) {

            if (err) res.status(500).send(err);
            else {
                var user = JSON.stringify(req.user._id),
                    creator = JSON.stringify(quiz.creator._id);

                Test.find({})
                    .exec(function (err, tests) {

                        if (err) res.status(500).send(err);
                        else {
                            console.log('tests...', tests);
                            var ids = [];
                            tests.forEach(function (e) { ids = ids.concat(e.quizzes); });
                            ids = ids.map(function (e) { return JSON.stringify(e); });
                            console.log('ids...', ids);
                            console.log('rea.params.id...', JSON.stringify(req.params.id));
                            var isUsed = ids.some(function (e) { return e === JSON.stringify(req.params.id); });
                            console.log('is used...', isUsed);

                            if (user === creator && !isUsed) {
                                quiz.remove(function (err) {

                                    if (err) res.status(500).send(err);
                                    else res.send(true);
                                });
                            }
                            else if (user !== creator) {
                                res.send('You can\'t delete a quiz that\'s not yours!');
                            }
                            else if (isUsed) {
                                res.send('You can\'t delete a quiz that\'s being used in a test!');
                            }
                        }
                    });
            }
        });
};


exports.quizzesEditing = function (req, res, next) {

    Quiz.find({ '_id': { $in: req.body.editing } })
        .populate('creator')
        .exec(function (err, quizzes) {
            if (err) res.status(500).send(err);
            else res.json(quizzes);
        });
};


exports.isQuizBeingUsed = function (req, res, next) {

    Quiz.find({})
        .exec(function (err, quizzes) {

            var ids = [];
            quizzes.forEach(function (e) { ids.push(JSON.stringify(e._id)); });
            res.send(ids.some(function (e) { return e === JSON.stringify(req.params.id); }));
        });
};