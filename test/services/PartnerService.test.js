const PartnerService = require("./../../lib/services/PartnerService");

describe("PartnerService Test", () => {
  test("1) Read visualpartners.json", () => {
    const visualpartners = [
      { name: "Andrea" },
      { name: "Verónica" },
      { name: "Carlo" },
    ];
    const partners = PartnerService.getAllPartners(visualpartners);
    expect(partners[0].name).toBe("Andrea1");
  });
});
