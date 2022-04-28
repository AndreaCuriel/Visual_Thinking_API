const PartnerController = require("./../../lib/controllers/PartnerController");

describe("PartnerController Test", () => {
  test("1) Regresar todos los Partners", () => {
    const virtualpartners =
      PartnerController.getPartnersEmailWthiCertification();
    expect(virtualpartners[0].name).toBe("Warren");
  });
});
