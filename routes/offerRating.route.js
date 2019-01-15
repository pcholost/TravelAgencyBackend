const express = require('express');
const router = express.Router();
const offerRating_controller = require('../controllers/offerRating.controller');



router.post('/create/offerID/:id/offerRating/:offerRating/ratingDate/:ratingDate', offerRating_controller.offerRating_create);
router.get('/read/:id', offerRating_controller.offerRating_read);
router.put('/update/:id/offerRating/:offerRating', offerRating_controller.offerRating_update);
router.get('/readAll', offerRating_controller.offerRating_readAll);
router.delete('/delete/id/:id', offerRating_controller.offerRating_delete);
router.get('/selectRate', offerRating_controller.someValue);

module.exports = router;