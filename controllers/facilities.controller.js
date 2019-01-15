var Facilities = require('../models/Facilities');

exports.offer_create = function (req, res, next) {
    var facilities = new Facilities(
        {
            offerID : req.body.facilitiesID,
            swimmingPool : req.body.swimmingPool,
            passport : req.body.passport,
            beach : req.body.beach,
            center: req.body.center,
            airport : req.body.airport,
            forFamily : req.body.forFamily,
            gym : req.body.gym
        }
    );
    facilities.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Facilities Created successfully')
    })
};

exports.offer_read = function (req, res,next) {
    Facilities.find({facilitiesID : req.params.facilitiesID}, function (err, facilities) {
        if (err) return next(err);
        res.send(facilities);
    })
};

exports.offer_update = function (req, res,next) {
    Facilities.update({facilitiesID : req.params.facilitiesID},{$set: req.body}, function (err, facilities) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('Facilities updated.');
        } else {
            res.redirect('/')
        }
    });


};

exports.offer_delete = function (req, res,next) {
    Facilities.deleteOne({facilitiesID : req.params.facilitiesID}, function (err,facilities) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('Facilities deleted successfully!');
        } else {
            res.redirect('/')
        }
    })

};

exports.offer_readAll = function (req, res,next) {
    Facilities.find({}, function (err, facilities) {
        if (err) return next(err);
        res.send(facilities);
    })
};