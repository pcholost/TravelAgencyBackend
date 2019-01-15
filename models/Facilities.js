var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var facilitiesSchema = new Schema({
    offerID : Number,
    swimmingPool : Boolean,
    passport : Boolean,
    beach : Boolean,
    center: Boolean,
    airport : Boolean,
    forFamily : Boolean,
    gym: Boolean
});


module.exports=mongoose.model('Facilities', facilitiesSchema);