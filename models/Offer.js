var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var offerSchema = new Schema({
    offerID : {type: Number, required: true},
    offerName : {type: String, required: true, max: 100},
    countryName : {type: String, required: true, max: 100},
    startDate : String,
    endDate: String,
    numberPeople : {type: Number, required: true},
    cost : {type: Number, required: true},
    availability: {type: Boolean, required:true}
});


module.exports=mongoose.model('Offer', offerSchema);