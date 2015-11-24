var Quiz = require('./quiz.server.model');


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

                if (user === creator) {
                    quiz.remove(function (err) {

                        if (err) res.status(500).send(err);
                        else res.status(204).send('Removed');
                    });
                }
                else {
                    res.send('You can\'t delete a quiz that\'s not yours!');
                }
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