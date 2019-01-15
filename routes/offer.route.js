const express = require('express');
const router = express.Router();
const offer_controller = require('../controllers/offer.controller');

router.get('/test', offer_controller.test);

router.post('/create', offer_controller.offer_create);
router.get('/read/:offerName', offer_controller.offer_read);
router.put('/update/:offerName', offer_controller.offer_update);
router.delete('/delete/offerName/:offerName', offer_controller.offer_delete);
router.get('/readAll', offer_controller.offer_readAll);
router.get('/selectTravel', offer_controller.someValue);
router.get('/searchCountry/:countryName', offer_controller.country_search_type);

module.exports = router;