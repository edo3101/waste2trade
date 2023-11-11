const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Partner = require("../models/partnerModel");

function authenticateToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, config.secretKey, async (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const partner = await Partner.findOne({ username: user.username });
    if (!partner) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    req.user = user;
    req.partner = partner;

    next();
  });
}

module.exports = authenticateToken;
