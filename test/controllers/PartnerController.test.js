const PartnerController = require("./../../lib/controllers/PartnerController");

describe("PartnerController Test", () => {
  test("1) Regresar todos los Partners", () => {
    const virtualpartners = PartnerController.getAllPartner();
    expect(virtualpartners[0].name).toBe("Warren");
  });

  test("2) Regresar emial de los Partners con certificado", () => {
    const virtualpartners =
      PartnerController.getPartnersEmailWthiCertification(true);
    expect(virtualpartners[0]).toBe("Todd@visualpartnership.xyz");
  });
});
