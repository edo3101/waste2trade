const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/login", partnerController.login);
router.get("/profile", authenticateToken.authenticateToken, partnerController.getPartnerData);
router.get(
  "/totalTrashWeight",
  authenticateToken.authenticateToken,
  partnerController.getTotalTrashWeight
);
router.get(
  "/trashSubmitHistory",
  authenticateToken.authenticateToken,
  partnerController.getTrashSubmitHistory
);
router.post("/submitTrash", authenticateToken.authenticateToken, partnerController.submitTrash);
router.get(
  "/generateGiftCode",
  authenticateToken.authenticateToken,
  partnerController.getGeneratedGiftCode
);

module.exports = router;
