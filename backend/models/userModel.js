const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  points: { type: Number, default: 10 },
});

module.exports = mongoose.model("User", userSchema);
