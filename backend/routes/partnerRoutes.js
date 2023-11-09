const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/login", partnerController.login);
router.get("/profile", authenticateToken, partnerController.getPartnerData);
router.get(
  "/totalTrashWeight",
  authenticateToken,
  partnerController.getTotalTrashWeight
);
router.get(
  "/trashSubmitHistory",
  authenticateToken,
  partnerController.getTrashSubmitHistory
);
router.post("/submitTrash", authenticateToken, partnerController.submitTrash);
router.post(
  "/generateGiftCode",
  authenticateToken,
  partnerController.generateGiftCode
);
router.post(
  "/generateGiftCode",
  authenticateToken,
  partnerController.generateGiftCode,
  partnerController.sendGeneratedGiftCode
);

module.exports = router;
