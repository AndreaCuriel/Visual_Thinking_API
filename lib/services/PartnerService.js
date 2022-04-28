class PartnerService {
  static getAllPartners(partners) {
    return partners;
  }

  static getPartnersEmailWthiCertification(partners, certificate) {
    const partnerCertificationfilter = partners.filter(
      (e) => e.haveCertification === certificate
    );
    const partnerCertificationEmail = partnerCertificationfilter.map(
      (e) => e.email
    );
    return partnerCertificationEmail;
  }
}

module.exports = PartnerService;
