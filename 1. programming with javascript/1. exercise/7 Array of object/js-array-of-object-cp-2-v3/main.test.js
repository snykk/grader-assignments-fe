const { expect, describe, it } = require('@jest/globals');
const countryMedals = require('./main');

describe('countryMedals', () => {
    let players = [
        {
            name: "Lionel Messi",
            medals: 5,
            country: "Argentina",
        },
        {
            name: "Iker Casillas",
            medals: 7,
            country: "Spain",
        },
        {
            name: "Ahmad Waluyo",
            medals: 5,
            country: "Indonesia",
        },
        {
            name: "Alvin Arkansas",
            medals: 8,
            country: "Indonesia",
        },
        {
            name: "Gabriel Batistuta",
            medals: 1,
            country: "Argentina",
        },
        {
            name: "Xavi Hernandes",
            medals: 9,
            country: "Spain",
        },
        {
            name: "Carles Puyol",
            medals: 5,
            country: "Spain",
        },
        {
            name: "Jatmika Teja",
            medals: 6,
            country: "Indonesia",
        },
        {
            name: "Sergio Aguero",
            medals: 3,
            country: "Argentina",
        },
    ];

    describe("when there is no list of countries", () => {
        it('returns as error message "Countries not provided"', () => {
            expect(countryMedals(players)).toMatch("Countries not provided");
        })
    })

    it('group athletes by country and add up the total medals owned by that country', () => {
        expect(countryMedals(players, ["Indonesia", "Spain"])).toEqual([
            {
                name: "Indonesia",
                athlete: ["Ahmad Waluyo", "Alvin Arkansas", "Jatmika Teja"],
                totalMedals: 19,
            },
            {
                name: "Spain",
                athlete: ["Iker Casillas", "Xavi Hernandes", "Carles Puyol"],
                totalMedals: 21,
            },
        ]);
        expect(countryMedals(players, ["Argentina", "Spain"])).toEqual([
            {
                name: "Argentina",
                athlete: ["Lionel Messi", "Gabriel Batistuta", "Sergio Aguero"],
                totalMedals: 9,
            },
            {
                name: "Spain",
                athlete: ["Iker Casillas", "Xavi Hernandes", "Carles Puyol"],
                totalMedals: 21,
            },
        ]);
        expect(countryMedals(players, ["Indonesia", "Argentina"])).toEqual([
            {
                name: "Indonesia",
                athlete: ["Ahmad Waluyo", "Alvin Arkansas", "Jatmika Teja"],
                totalMedals: 19,
            },
            {
                name: "Argentina",
                athlete: ["Lionel Messi", "Gabriel Batistuta", "Sergio Aguero"],
                totalMedals: 9,
            },
        ]);
    })
})
