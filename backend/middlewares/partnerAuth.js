const jwt = require('jsonwebtoken');
const config = require('../config/config');

const partnerAuthMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.secretKey);
    req.partnerId = decoded.partnerId;
    next();
  } catch (ex) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};

module.exports = partnerAuthMiddleware;
