const { expect, describe, it } = require("@jest/globals");
const deretanAngkaHinggaN = require("./main");

describe("deretanAngkaHinggaN", () => {
  describe("when given number below 2", () => {
    it("should return Incorrect param", () => {
      expect(deretanAngkaHinggaN(1)).toBe("Incorrect param");
      expect(deretanAngkaHinggaN(0)).toBe("Incorrect param");
      expect(deretanAngkaHinggaN(-1)).toBe("Incorrect param");
    });
  });

  describe("when given 5", () => {
    it("should return string", () => {
      expect(typeof deretanAngkaHinggaN(5) === "string").toBe(true);
    });

    it("should return 4321321211", () => {
      expect(deretanAngkaHinggaN(5)).toEqual("4321321211");
    });
  });

  describe("when given 8", () => {
    it("should return string", () => {
      expect(typeof deretanAngkaHinggaN(8) === "string").toBe(true);
    });

    it("should return 7654321654321543214321321211", () => {
      expect(deretanAngkaHinggaN(8)).toEqual("7654321654321543214321321211");
    });
  });

  describe("when given 12", () => {
    it("should return string", () => {
      expect(typeof deretanAngkaHinggaN(12) === "string").toBe(true);
    });

    it("should return 111098765432110987654321987654321876543217654321654321543214321321211", () => {
      expect(deretanAngkaHinggaN(12)).toEqual(
        "111098765432110987654321987654321876543217654321654321543214321321211"
      );
    });
  });
});
