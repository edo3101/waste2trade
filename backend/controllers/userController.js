// src/modules/user/controller.js

const UserService = require("../services/userService");
const coffeeShop = require("../models/coffeeShop");

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
};
