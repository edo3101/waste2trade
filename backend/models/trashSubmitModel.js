const mongoose = require("mongoose");

const trashSubmitSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  trashWeight: Number,
  trashType: String,
  trashDate: { type: Date, default: Date.now },
  partnerId: { type: mongoose.Schema.Types.ObjectId, ref: "Partner" },
});

module.exports = mongoose.model("TrashSubmit", trashSubmitSchema);
