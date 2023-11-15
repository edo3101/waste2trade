const UserService = require("../services/userService");
const CoffeeShop = require("../models/coffeShop");
const User = require("../models/userModel");
const GiftCode = require("../models/giftCodeModel");
const Product = require("../models/productModel");

const userService = new UserService();

async function signup(req, res) {
  try {
    const user = await userService.signup(req.body);
    res.json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const result = await userService.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

async function profile(req, res) {
  try {
    const user = await User.findOne({ email: req.data.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function giftcode(req, res) {
  try {
    const { giftCode } = req.body;

    const targetUser = await User.findOne({ email: req.data.email });

    if (!targetUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const targetGiftCode = await GiftCode.findOne({
      code: giftCode,
      status: "unclaimed",
    });

    if (!targetGiftCode) {
      return res
        .status(404)
        .json({ message: "Gift code not found or already claimed" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      targetUser._id,
      { $inc: { points: targetGiftCode.points } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(500).json({ message: "Unable to update user points" });
    }

    targetGiftCode.status = "claimed";
    targetGiftCode.claimedBy = targetUser._id;
    targetGiftCode.claimedAt = new Date();
    await targetGiftCode.save();

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products: ", err);
    res.status(500).json({ error: "Unable to retrieve products" });
  }
}

async function buyProduct(req, res) {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = req.user; 
    const quantity = req.body.quantity || 1;

    if (user.points < product.price * quantity) {
      return res
        .status(400)
        .json({ message: "Not enough points to buy these products" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $inc: { points: -product.price * quantity } },
      { new: true }
    );

    res.json({
      user: updatedUser,
      message: `Successfully bought ${quantity} ${product.name}(s)`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getCoffeeShop(req, res) {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
  } catch (err) {
    console.error("Error fetching coffee shops: ", err);
    res.status(500).json({ error: "Unable to retrieve coffee shops" });
  }
}

module.exports = {
  signup,
  login,
  getCoffeeShop,
  profile,
  giftcode,
  buyProduct,
  getProducts,
};
