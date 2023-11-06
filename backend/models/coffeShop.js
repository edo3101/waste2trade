const mongoose = require("mongoose");

const coffeeShopSchema = new mongoose.Schema({
  name: String,
  address: String,
  products: [
    {
      product_name: String,
      price: String,
    },
  ],
  openhours: String,
});

module.exports = mongoose.model("CoffeeShop", coffeeShopSchema);
