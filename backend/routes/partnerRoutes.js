const express = require('express');
const partnerController = require('../controllers/partnerController');
const partnerAuth = require('../middlewares/partnerAuth'); // Check the path

const router = express.Router();

router.post('/partner-login', partnerController.login);

// Protect the /profile route with partner authentication middleware
router.get('/profile', partnerAuth, (req, res) => {
  // Implement the logic for the /profile route here
});

module.exports = router;
