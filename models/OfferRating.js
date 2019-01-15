var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var offerRatingSchema = new Schema({
    offerID: {type:String, required:true},
    offerRating : {type: Number, min:1,max:5, required:true},
    ratingDate : {type: Date, default: Date.now}
});

module.exports = mongoose.model('OfferRating', offerRatingSchema);