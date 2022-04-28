const Reader = require("./../../lib/utils/Reader");

describe("Reader Test", () => {
    test("1) Read visualpartners,json", () => {
        const visualpartners = Reader.readJsonFile("visualpartners.json");
        const partner = visualpartners[0].name;
        expect(partner).toBe("Warren");
    });
});
