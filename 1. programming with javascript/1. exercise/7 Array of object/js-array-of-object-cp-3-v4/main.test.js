const { expect, describe, it } = require("@jest/globals");
const mostRecommended = require("./main");

describe("mostRecommended", () => {
  describe("when the amount of data is less than 2", () => {
    it('returns as error message "Data cannot be compared"', () => {
      expect(
        mostRecommended([
          {
            title: "Pipe Mania",
            genre: "board",
            developer: "The Assembly Line",
            rating: 9.7,
          },
        ])
      ).toMatch("Data cannot be compared");

      expect(
        mostRecommended([
          {
            title: "Solitaire",
            genre: "Board",
            developer: "Wes Cherry",
            rating: 10,
          },
        ])
      ).toMatch("Data cannot be compared");
    });
  });

  it("returns game with the best ratings by game genre", () => {
    let games1 = [
      {
        title: "The Last of Us Part I",
        genre: "actionAdventure",
        developer: "Naughty Dog",
        rating: 9.6,
      },
      {
        title: "WWE 2K22",
        genre: "fighting",
        developer: "Visual Concepts",
        rating: 7.5,
      },
      {
        title: "Tekken 7",
        genre: "fighting",
        developer: "BANDAI NAMCO Studios",
        rating: 9.5,
      },
      {
        title: "The Witcher 3: Wild Hunt",
        genre: "actionAdventure",
        developer: "CD Projekt Red",
        rating: 10,
      },
    ];

    let games2 = [
      {
        title: "The Sims 4",
        genre: "simulation",
        developer: "Maxis",
        rating: 9.4,
      },
      {
        title: "Cities: Skylines",
        genre: "simulation",
        developer: "Colossal Order",
        rating: 9.2,
      },
      {
        title: "Far Cry 5",
        genre: "firstPersonShooter",
        developer: "Ubisoft Montreal",
        rating: 8.9,
      },
      {
        title: "Project CARS 3",
        genre: "racing",
        developer: "Slightly Mad Studios",
        rating: 6.8,
      },
      {
        title: "Hot Wheels Unleashed",
        genre: "racing",
        developer: "Milestone",
        rating: 9.2,
      },
    ];

    expect(mostRecommended(games1)).toEqual({
      actionAdventure: {
        title: "The Witcher 3: Wild Hunt",
        genre: "actionAdventure",
        developer: "CD Projekt Red",
        rating: 10,
      },
      fighting: {
        title: "Tekken 7",
        genre: "fighting",
        developer: "BANDAI NAMCO Studios",
        rating: 9.5,
      },
    });

    expect(mostRecommended(games2)).toEqual({
      simulation: {
        title: "The Sims 4",
        genre: "simulation",
        developer: "Maxis",
        rating: 9.4,
      },
      firstPersonShooter: {
        title: "Far Cry 5",
        genre: "firstPersonShooter",
        developer: "Ubisoft Montreal",
        rating: 8.9,
      },
      racing: {
        title: "Hot Wheels Unleashed",
        genre: "racing",
        developer: "Milestone",
        rating: 9.2,
      },
    });
  });
});
