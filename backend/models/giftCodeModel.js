const mongoose = require("mongoose");

const giftCodeSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  status: {
    type: String,
    enum: ["unclaimed", "claimed"],
    default: "unclaimed",
  },
  points: { type: Number, default: 0 },
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Partner" },
  claimedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  generatedAt: { type: Date, default: Date.now },
  claimedAt: { type: Date, default: null },
});

module.exports = mongoose.model("GiftCode", giftCodeSchema);
