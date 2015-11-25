var Test = require('./test.server.model');


exports.postTest = function (req, res, next) {

    var test = new Test(req.body);
    test.save(function (err, test) {

        if (err) res.status(500).send(err);
        else res.json(test);
    });
};


exports.getTests = function (req, res, next) {

    Test.find({})
        .populate('creator')
        .populate('quizzes')
        .exec(function (err, tests) {

            if (err) res.status(500).send(err);
            else res.json(tests);
        });
};