const OfferRating = require('../models/OfferRating');
const Offer = require('../models/Offer');


exports.offerRating_create = function (req, res,next) {
    let offerRating = new OfferRating(
        {
            offerID: req.params.id,
            offerRating : req.params.offerRating,
            ratingDate : req.params.ratingDate
        }
    );

    offerRating.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('OfferRating Created successfully')
    })
};

exports.offerRating_read = function (req, res,next) {
    OfferRating.find({offerID: req.params.id}, function (err, offerRating) {
        if (err) return next(err);
        res.send(offerRating);
    })
};

exports.offerRating_update = function (req, res,next) {
    OfferRating.update({offerID : req.params.id},{offerRating: req.params.offerRating}, function (err, offerRating) {
        if (err) return next(err);
        res.send('OfferRating udpated.');
    });


};

exports.offerRating_delete = function (req, res,next) {
    OfferRating.deleteOne({offerID : req.params.id}, function (err,offerRating) {
        if (err) return next(err);
        res.send('OfferRating deleted successfully!');
    })

};

exports.offerRating_readAll = function (req, res,next) {
    OfferRating.find({}, function (err, offerRating) {
        if (err) return next(err);
        res.send(offerRating);
    })
};

exports.someValue = function(req, res, next) {
    //query with mongoose
    var query = OfferRating.find({}).select({ "offerRating": 1, "_id": 0});

    query.exec(function (err, offerRating) {
        if (err) return next(err);
        res.send(offerRating);
    });
};