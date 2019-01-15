var Offer = require('../models/Offer');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.offer_create = function (req, res, next) {
    var offer = new Offer(
        {
            offerID : req.body.offerID,
            offerName : req.body.offerName,
            countryName : req.body.countryName,
            startDate : req.body.startDate,
            endDate : req.body.endDate,
            numberPeople : req.body.numberPeople,
            cost : req.body.cost
        }
    );
    offer.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Offer Created successfully')
    })
};

exports.offer_read = function (req, res,next) {
    Offer.find({offerName : req.params.offerName}, function (err, offer) {
        if (err) return next(err);
        res.send(offer);
    })
};

exports.offer_update = function (req, res,next) {
    Offer.update({offerName : req.params.offerName},{$set: req.body}, function (err, offer) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('Offer updated.');
        } else {
            res.redirect('/')
        }
    });


};

exports.offer_delete = function (req, res,next) {
    Offer.deleteOne({offerName : req.params.offerName}, function (err,offer) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('Offer deleted successfully!');
        } else {
            res.redirect('/')
        }
    })

};

exports.offer_readAll = function (req, res,next) {
    Offer.find({}, function (err, offer) {
        if (err) return next(err);
        res.send(offer);
    })
};

//pokazuje wycieczki po kosztach i dacie startu
exports.someValue = function(req, res, next) {
    //query with mongoose
    var query = Offer.find({}).select({ "cost": 1, "startDate": 1, "_id": 0});

    query.exec(function (err, offerRating) {
        if (err) return next(err);
        res.send(offerRating);
    });
};
//wyszukiwanie po nazwie kraju
exports.country_search_type = function (req, res,next) {
    Offer.find({countryName : req.params.countryName}, function (err, offer) {
        if (err) return next(err);
        res.send(offer);
    })
};
