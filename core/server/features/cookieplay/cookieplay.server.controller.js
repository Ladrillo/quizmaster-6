exports.sayHello = function (req, res, next) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    console.log(req.session.lastVisit);

    res.json(req.session);
};