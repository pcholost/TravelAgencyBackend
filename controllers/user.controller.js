const User = require('../models/User');

exports.user_create = function (req, res, next) {
    let user = new User(
        {
            username: req.body.username,
            email: req.body.email
        }
    );
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_read = function (req, res,next) {
    User.findById(req.body.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res,next) {
    User.findByIdAndUpdate(req.body.id, {username: req.body.username}, function (err, user) {
        if (err) return next(err);
        res.send('Username updated.');
    });
};

exports.user_updateRatedBook = function (req, res,next) {
    User.findByIdAndUpdate(req.body.id, {$push: {rated : req.body.rated}}, function (err, user) {
        if (err) return next(err);
        res.send('You rated this book.');
    });
};

exports.user_readAll = function (req, res,next) {
    User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};