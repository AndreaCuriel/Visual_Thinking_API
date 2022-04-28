const Reader = require("./../../lib/utils/Reader");
const PartnerService = require("./../../lib/services/PartnerService");

class PartnerController {
  static getAllPartner() {
    const visualpartners = Reader.readJsonFile("visualpartners.json");
    return PartnerService.getAllPartners(visualpartners);
  }

  static getPartnersEmailWthiCertification(certificate) {
    const visualpartners = Reader.readJsonFile("visualpartners.json");
    return PartnerService.getPartnersEmailWthiCertification(
      visualpartners,
      certificate
    );
  }

  static getPartnersWithNumCredits(credits) {
    const visualpartners = Reader.readJsonFile("visualpartners.json");
    return PartnerService.getPartnersWithNumCredits(visualpartners, credits);
  }
}

module.exports = PartnerController;
