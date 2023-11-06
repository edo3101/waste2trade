const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const PartnerRepository = require("../repositories/partnerRepository");

class PartnerService {
  constructor() {
    this.partnerRepository = new PartnerRepository();
  }

  async login(username, password) {
    try {
      const partner = await this.partnerRepository.findOne({ username });

      if (!partner) {
        throw new Error("Invalid username");
      }

      const isPasswordValid = await bcrypt.compare(password, partner.password);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      // Generate a JWT token
      const token = jwt.sign({ partnerId: partner._id }, config.secretKey, {
        expiresIn: "1h",
      });

      // Return the partner data without the token
      return {
        partner: {
          _id: partner._id,
          username: partner.username,
          password: partner.password,
          name: partner.name,
          image_profile: partner.image_profile,
          address: partner.address,
          products: partner.products,
          openhours: partner.openhours,
        },
        token,
      };
    } catch (error) {
      throw error;
    }
  }

  // Implement other partner-related service methods as needed
}

module.exports = PartnerService;
