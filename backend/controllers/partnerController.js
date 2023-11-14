const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Partner = require("../models/partnerModel");
const TrashSubmit = require("../models/trashSubmitModel");
const GiftCode = require("../models/giftCodeModel");

function generateUniqueGiftCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let giftCode = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    giftCode += characters.charAt(randomIndex);
  }

  return giftCode;
}

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
    const partnerId = req.partner._id;

    const totalWeight = await TrashSubmit.aggregate([
      {
        $match: {
          partnerId: partnerId,
        },
      },
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
    const partnerId = req.partner._id;

    const trashSubmitHistory = await TrashSubmit.find({ partnerId: partnerId });

    res.json({ trashSubmitHistory });
  } catch (error) {
    console.error("Error fetching trash submit history: ", error);
    res.status(500).json({ error: "Unable to retrieve trash submit history" });
  }
};

exports.submitTrash = async (req, res) => {
  const { username, phoneNumber, trashWeight, trashType } = req.body;

  try {
    const points = Math.floor(trashWeight / 300);
    const uniqueGiftCode = generateUniqueGiftCode();

    const giftCode = await GiftCode.create({
      code: uniqueGiftCode,
      status: "unclaimed",
      points,
      generatedBy: req.partner._id,
    });

    await TrashSubmit.create({
      username,
      phoneNumber,
      trashWeight,
      trashType,
      partnerId: req.partner._id,
    });

    res
      .status(200)
      .json({ message: "Trash submitted successfully", giftCode, points });
  } catch (error) {
    console.error("Error submitting trash: ", error);
    res.status(500).json({ error: "Unable to submit trash" });
  }
};

exports.getGeneratedGiftCode = async (req, res) => {
  try {
    const giftCode = await GiftCode.findOne({
      generatedBy: req.partner._id,
      status: "unclaimed",
    })
      .sort({ generatedAt: -1 }) // Sort by the most recent
      .limit(1);

    if (!giftCode) {
      return res.status(404).json({ message: "No gift code available" });
    }

    res.status(200).json({ giftCode });
  } catch (error) {
    console.error("Error fetching gift code: ", error);
    res.status(500).json({ error: "Unable to fetch gift code" });
  }
};
