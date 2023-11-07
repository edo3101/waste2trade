const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/login", partnerController.login);
router.get("/profile", authenticateToken, partnerController.getPartnerData);

module.exports = router;
