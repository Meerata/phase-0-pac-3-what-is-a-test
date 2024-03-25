const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = { name, height, message };

const {
  name: testName,
  height: testHeight,
  message: testMessage,
} = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(testName).toEqual("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40", () => {
      expect(testHeight).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(testMessage).toContain(testName);
      expect(testMessage).toContain(testHeight);
    });
  });
});
