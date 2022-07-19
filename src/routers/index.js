var express = require('express');
var router = express.Router();
const controller = require('../controllers')

router.get('/', controller.test);

router.get('/session', controller.session);
router.post('/message', controller.message);


module.exports = router;