const PartnerService = require('../services/partnerService');

const partnerService = new PartnerService();

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const partner = await partnerService.login(username, password);
    // Return partner data or a token in the response
    res.json(partner);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = {
  login,
};
