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


exports.deleteTest = function (req, res, next) {

    Test.findById(req.params.id)
        .populate('creator')
        .exec(function (err, test) {

            if (err) res.status(500).send(err);
            else {
                var user = JSON.stringify(req.user._id),
                    creator = JSON.stringify(test.creator._id);

                if (user === creator) {
                    test.remove(function (err) {

                        if (err) res.status(500).send(err);
                        else res.status(204).send('deleted');
                    });
                }
                else {
                    res.send('You can\'t delete a test that\'s not yours!');
                }
            }
        });
};