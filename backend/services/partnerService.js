const bcrypt = require('bcrypt');
const PartnerRepository = require('../repositories/partnerRepository');

class PartnerService {
  constructor() {
    this.partnerRepository = new PartnerRepository();
  }

  async login(username, password) {
    try {
      // Find the partner by username
      const partner = await this.partnerRepository.findOne({ username });

      if (!partner) {
        throw new Error('Invalid username');
      }

      // Check if the provided password matches the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, partner.password);

      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

      // Return the partner data
      return partner;
    } catch (error) {
      throw error;
    }
  }

  // Implement other partner-related service methods as needed
}

module.exports = PartnerService;
