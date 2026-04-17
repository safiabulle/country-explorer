const { getCountry } = require("../script");

describe("getCountry function", () => {

    test("should be defined", () => {
        expect(getCountry).toBeDefined();
    });

    test("should be a function", () => {
        expect(typeof getCountry).toBe("function");
    });

});
