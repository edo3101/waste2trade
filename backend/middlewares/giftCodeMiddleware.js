const GiftCode = require("../models/giftCodeModel");

const generateGiftCode = async (req, res, next) => {
  try {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let giftCode = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      giftCode += characters.charAt(randomIndex);
    }

    const generatedGiftCode = await GiftCode.create({
      code: giftCode,
      status: "unclaimed",
      points: req.body.points,
      generatedBy: req.partner._id,
    });

    req.generatedGiftCode = generatedGiftCode;

    next();
  } catch (error) {
    console.error("Error generating gift code: ", error);
    res.status(500).json({ error: "Unable to generate gift code" });
  }
};

module.exports = { generateGiftCode };
