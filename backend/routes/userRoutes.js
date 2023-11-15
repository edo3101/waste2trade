const express = require("express");
const userController = require("../controllers/userController");
const authenticateTokenUser = require("../middlewares/authenticateToken");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get(
  "/profile",
  authenticateTokenUser.authenticateTokenUser,
  userController.profile
);
router.put(
  "/redeemcode",
  authenticateTokenUser.authenticateTokenUser,
  userController.giftcode
);
router.put(
  "/redeemkopi",
  authenticateTokenUser.authenticateTokenUser,
  userController.redeemkopi
);
router.put(
  "/redeembag",
  authenticateTokenUser.authenticateTokenUser,
  userController.redeembag
);
router.put(
  "/redeemtumbler",
  authenticateTokenUser.authenticateTokenUser,
  userController.redeemtumbler
);
router.get("/coffeeShops", userController.getCoffeeShop);

module.exports = router;
