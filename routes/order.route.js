var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var order_controller = require('../controllers/order.controller');


router.post('/create', order_controller.order_create);

router.get('/readAll', order_controller.get_readAll);

router.get('/read', order_controller.get_read);

router.post('/update/:orderId', order_controller.order_update);

router.post('/delete/:orderId', order_controller.order_delete);

router.post('/confirm/:orderId', order_controller.order_confirm);

router.post('/complete/:orderId', order_controller.order_complete);

module.exports = router;