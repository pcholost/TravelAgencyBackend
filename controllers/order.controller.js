var Order = require('../models/Order');
//var offer = require('../models/offer');
//var x = offer.valueOf(availability);


exports.order_create = function (req, res, next) {
    var order = new Order(
        {
            orderId: req.body.orderId,
            status: req.body.status,
            userName: req.body.userName,
            userSurname: req.body.userSurname,
            userPhone: req.body.userPhone,
            userEmail: req.body.userEmail,
            orderDate: req.body.orderDate
        });

    order.save(function (err){
        if (err) {
            return next(err);
        }
        res.send('Order Created successfully')
    })

};

exports.get_read = function(req, res, next){
    Order.findById(req.params.orderId, function (err, order) {
        if (err) return next(err);
        res.send(order);
    })
};

exports.get_readAll = function(req, res, next){
    Order.find({}, function (err, orders) {
        if (err) return next(err);
        res.send(orders);
    })
};

exports.order_update = function(req, res, next){
    Order.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, order) {
        if (err) return next(err);
        res.send('Order updated.');
    });
};

exports.order_delete = function(req, res, next){
    Order.remove({ _id: req.params.orderId }, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })

};

exports.order_confirm = function(req, res){
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.send(err);
        }
        order.status = true;
        Order.findOneAndUpdate({ _id: req.params.orderId }, order, { new: true }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.send('Available!');
        });
    });
}

exports.order_complete = function(req, res){
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.send(err);
        }
        order.status = true;
        Order.findOneAndUpdate({ _id: req.params.orderId }, order, { new: true }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.send('Complete!');
        });
    });
};
