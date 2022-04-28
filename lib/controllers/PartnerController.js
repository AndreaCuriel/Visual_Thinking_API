const Reader = require("./../../lib/utils/Reader");
const PartnerService = require("./../../lib/services/PartnerService");

class PartnerController {
  static getPartnersEmailWthiCertification() {
    const visualpartners = Reader.readJsonFile("visualpartners.json");
    return PartnerService.getAllPartners(visualpartners);
  }
}

module.exports = PartnerController;
