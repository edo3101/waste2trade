const jwt = require("jsonwebtoken");
const config = require("../config/config");

function authenticateToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, config.secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
