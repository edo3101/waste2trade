const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Partner = require("../models/partnerModel");
const TrashSubmit = require("../models/trashSubmitModel");
const giftCodeMiddleware = require("../middlewares/giftCodeMiddleware");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const partner = await Partner.findOne({ username });

    if (!partner) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, partner.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: partner.username }, config.secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getPartnerData = async (req, res) => {
  try {
    const partner = await Partner.findOne({ username: req.user.username });

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    res.json(partner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTotalTrashWeight = async (req, res) => {
  try {
    const totalWeight = await TrashSubmit.aggregate([
      {
        $group: {
          _id: null,
          totalWeight: { $sum: "$trashWeight" },
        },
      },
    ]);

    if (totalWeight.length === 0) {
      return res.json({ totalWeight: 0 });
    }

    res.json({ totalWeight: totalWeight[0].totalWeight });
  } catch (error) {
    console.error("Error fetching total trash weight: ", error);
    res.status(500).json({ error: "Unable to retrieve total trash weight" });
  }
};

exports.getTrashSubmitHistory = async (req, res) => {
  try {
    const trashSubmitHistory = await TrashSubmit.find({});

    res.json({ trashSubmitHistory });
  } catch (error) {
    console.error("Error fetching trash submit history: ", error);
    res.status(500).json({ error: "Unable to retrieve trash submit history" });
  }
};

exports.submitTrash = async (req, res) => {
  const { username, phoneNumber, trashWeight, trashType } = req.body;

  try {
    await TrashSubmit.create({
      username,
      phoneNumber,
      trashWeight,
      trashType,
    });

    res.status(200).json({ message: "Trash submitted successfully" });
  } catch (error) {
    console.error("Error submitting trash: ", error);
    res.status(500).json({ error: "Unable to submit trash" });
  }
};

exports.generateGiftCode = async (req, res) => {
  const { username, points } = req.body;

  try {
    // Generate a unique gift code
    const uniqueGiftCode = generateUniqueGiftCode();

    // Save the gift code to the GiftCode collection
    const giftCode = await GiftCode.create({
      code: uniqueGiftCode,
      status: "unclaimed",
      points,
      generatedBy: req.partner._id,
    });

    res.status(200).json({ giftCode });
  } catch (error) {
    console.error("Error generating gift code: ", error);
    res.status(500).json({ error: "Unable to generate gift code" });
  }
};

exports.generateGiftCode = giftCodeMiddleware.generateGiftCode;

exports.sendGeneratedGiftCode = (req, res) => {
  res.status(200).json({ giftCode: req.generatedGiftCode });
};
