const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  image_profile: String,
  address: String,
  products: [
    {
      product_name: String,
      image_product: String,
      price: String,
    },
  ],
  openhours: String,
});

module.exports = mongoose.model('Partner', partnerSchema);
