const UserService = require("../services/userService");
const CoffeeShop = require("../models/coffeShop");
const User = require("../models/userModel")

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
      const user = await User.findOne({ email: req.data.email});
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
};

async function giftcode(req, res) {
  try {
    const target = await User.findOne({ email: req.data.email});
    const updatePoin = { $set: { points: 1000 } };

    const user = await User.updateOne(target, {updatePoin})

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

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
  giftcode
};
