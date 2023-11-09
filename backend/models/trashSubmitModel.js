const mongoose = require("mongoose");

const trashSubmitSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  trashWeight: Number,
  trashType: String,
  submissionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TrashSubmit", trashSubmitSchema);
