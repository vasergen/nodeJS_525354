const { greet } = require("./greet");

describe("sum", () => {
  it("should return greeting", () => {
    const result = greet();
    expect(result).toMatchInlineSnapshot(`"Hello!!!"`);
  });
});
