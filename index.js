const PartnerService = require("./lib/services/PartnerService");
const Reader = require("./lib/utils/Reader");

const visualpartners = Reader.readJsonFile("visualpartners.json");
const objetos = PartnerService.getPartnersEmailWthiCertification(
  visualpartners,
  false
);
console.log(objetos);
