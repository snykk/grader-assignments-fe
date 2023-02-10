const { expect, describe, it } = require("@jest/globals");
const buyThemAll = require("./main");

describe("buyThemAll can count total book can buy", () => {
  describe("when budget is enough", () => {
    it("should return total books, total price, and remaining budget", () => {
      const books =
        "The Alchemist:55000,The Hobit:20000,The Power of Habit:10000";
      const budget = 100000;
      const result = buyThemAll(books, budget);
      expect(result).toEqual(
        "Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000."
      );
    });

    it("should return total books, total price, and remaining budget", () => {
      const books =
        "Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,";
      const budget = 300000;
      const result = buyThemAll(books, budget);
      expect(result).toEqual(
        "Afista membeli 2 buku yaitu Javascript itu asik, Lebih Mengenal CSS3. Total belanja 266200, sisa uang Afista adalah 33800."
      );
    });

    it("should buy the next books when the budget is not enough to buy more expensive ones", () => {
      const books =
        "The Alchemist:55000,The Hobit:25000,The Power of Habit:10000,Harry Potter:5000";
      const budget = 20000;
      const result = buyThemAll(books, budget);
      expect(result).toEqual(
        "Afista membeli 2 buku yaitu The Power of Habit, Harry Potter. Total belanja 15000, sisa uang Afista adalah 5000."
      );
    });
  });

  describe("when budget is not enough", () => {
    it("should return total books, total price, and remaining budget", () => {
      const books =
        "Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,";
      const budget = 20000;
      const result = buyThemAll(books, budget);
      expect(result).toEqual(
        "Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000."
      );
    });

    it("should return total books, total price, and remaining budget", () => {
      const books =
        "Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,";
      const budget = 0;
      const result = buyThemAll(books, budget);
      expect(result).toEqual(
        "Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0."
      );
    });
  });
});
