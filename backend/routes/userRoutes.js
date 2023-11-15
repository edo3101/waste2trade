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
router.get("/coffeeShops", userController.getCoffeeShop);
router.put(
  "/buyProduct/:productId",
  authenticateTokenUser.authenticateTokenUser,
  userController.buyProduct
);

module.exports = router;
