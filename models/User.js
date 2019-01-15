var mongoose = require('mongoose');
var {Schema} = mongoose;

var userSchema = new Schema({
    username : String,
    googleId : String,
    email : String,
    rated: [{type: Schema.Types.ObjectId, ref: 'OfferRating'}],
    userType: String,
});


mongoose.model('users', userSchema);