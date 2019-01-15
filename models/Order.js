var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    orderId: {type: Number, required: true},
    status: {type: Boolean, required: true},
    userName: {type: String, required: true},
    userSurname: {type: String, required: true},
    userPhone: String,
    userEmail: {type: String, required: true},
    orderDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Order', OrderSchema);