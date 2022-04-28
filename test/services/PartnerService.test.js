const {
    getPartnersEmailWthiCertification,
} = require("./../../lib/services/PartnerService");
const PartnerService = require("./../../lib/services/PartnerService");

describe("PartnerService Test", () => {
    test("1) Read visualpartners.json", () => {
        const visualpartners = [
            { name: "Andrea" },
            { name: "Verónica" },
            { name: "Carlo" },
        ];
        const partners = PartnerService.getAllPartners(visualpartners);
        expect(partners[0].name).toBe("Andrea");
    });

    test("2) regresar todo los email de los partners con certificado", () => {
        const visualpartners = [
            { haveCertification: true, email: "Andrea@gmail.com" },
            { haveCertification: false, email: "Carlo@gmail.com" },
        ];
        const partners = PartnerService.getPartnersEmailWthiCertification(
            visualpartners,
            true
        );
        expect(partners.length).toBe(1);
    });

    test("3) Regresar todos los partners que tengan creditos mayores a x", () => {
        const visualpartners = [{ credits: 30 }, { credits: 501 }];
        const partners = PartnerService.getPartnersWithNumCredits(
            visualpartners,
            500
        );
        expect(partners.length).toBe(1);
    });
});
