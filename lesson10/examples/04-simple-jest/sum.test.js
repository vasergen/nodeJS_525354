const { sum } = require("./sum");

describe("sum", () => {
  afterAll(() => {
    console.log("I am running after all tests");
  });

  beforeAll(() => {
    console.log("I am running before all tests");
  });

  beforeEach(() => {
    console.log("I am running before every test");
  });

  test("1 + 2 should return 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("1 + -2 should return -1", () => {
    const result = sum(1, -2);
    expect(result).toBe(-1);
  });

  describe("when not a number", () => {
    // it === test
    it("'1' + -2 should return -1", () => {
      const result = sum("1", -2);
      expect(result).toEqual(-1);
    });
  });
});
