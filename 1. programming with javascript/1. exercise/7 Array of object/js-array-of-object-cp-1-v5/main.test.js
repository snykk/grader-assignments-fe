const { expect, describe, it } = require('@jest/globals');
const gameGrouping = require('./main');

describe('gameGrouping', () => {
    describe("when the amount of data is less than 2", () => {
        it('returns as error message "Data cannot be compared"', () => {
            expect(gameGrouping([
                {
                    title: "Pipe Mania",
                    genre: "board",
                    developer: "The Assembly Line",
                    rating: 9.7,
                },
            ])).toMatch("Data cannot be compared");

            expect(gameGrouping([
                {
                    title: "Solitaire",
                    genre: "board",
                    developer: "Wes Cherry",
                    rating: 10,
                },
            ])).toMatch("Data cannot be compared");
        })
    })

    it('returns games titles grouped by genre', () => {
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
            { title: 'The Sims 4', genre: 'simulation', developer: 'Maxis', rating: 9.2 },
            { title: 'Cities: Skylines', genre: 'simulation', developer: 'Colossal Order', rating: 9.4 },
            { title: 'Far Cry 5', genre: 'firstPersonShooter', developer: 'Ubisoft Montreal', rating: 8.9 },
            { title: 'Project CARS 3', genre: 'racing', developer: 'Slightly Mad Studios', rating: 6.8 },
            { title: 'Hot Wheels Unleashed', genre: 'racing', developer: 'Milestone', rating: 9.2 }
        ]

        let result1 = gameGrouping(games1)
        let result2 = gameGrouping(games2)

        expect(result1.actionAdventure.title).toEqual(expect.arrayContaining(['The Last of Us Part I', 'The Witcher 3: Wild Hunt']))
        expect(result1.fighting.title).toEqual(expect.arrayContaining(['WWE 2K22', 'Tekken 7']))

        expect(result2.simulation.title).toEqual(expect.arrayContaining(['The Sims 4', 'Cities: Skylines']))
        expect(result2.firstPersonShooter.title).toEqual(expect.arrayContaining(['Far Cry 5']))
        expect(result2.racing.title).toEqual(expect.arrayContaining(['Project CARS 3', 'Hot Wheels Unleashed']))
    })
})
