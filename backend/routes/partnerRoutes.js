const express = require('express');
const partnerController = require('../controllers/partnerController');
const router = express.Router();

router.post('/partner-login', partnerController.login);

module.exports = router;
