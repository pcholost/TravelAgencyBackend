const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');

router.post('/create/', user_controller.user_create);
router.get('/read/', user_controller.user_read);
router.put('/update/:id', user_controller.user_update);
router.get('/readAll', user_controller.user_readAll);
router.put('/update/rated', user_controller.user_updateRatedBook);

module.exports = router;