const express = require('express');
const router = express.Router();
const facilities_controller = require('../controllers/facilities.controller');

router.post('/create', facilities_controller.offer_create);
router.get('/read/:facilities', facilities_controller.offer_read);
router.put('/update/:facilities', facilities_controller.offer_update);
router.delete('/delete/offerName/:facilities', facilities_controller.offer_delete);
router.get('/readAll', facilities_controller.offer_readAll);

module.exports = router;