const bcrypt = require("bcrypt");
const Partner = require("../models/partnerModel");

class PartnerRepository {
  async createPartner(partnerData) {
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(partnerData.password, 10);
    partnerData.password = hashedPassword;

    return await Partner.create(partnerData);
  }

  async findOne(query) {
    return await Partner.findOne(query);
  }

}

module.exports = PartnerRepository;
