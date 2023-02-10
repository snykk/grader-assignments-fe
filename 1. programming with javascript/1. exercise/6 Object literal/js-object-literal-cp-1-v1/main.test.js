const { expect, describe, it } = require('@jest/globals');
const counterApp = require('./main');

describe("counterApp", () => {
    describe("when data is an empty array", () => {
        it('returns Data not found', () => {
            expect(counterApp([])).toMatch("Data not found");
        })
    })
    describe("when data is undifined", () => {
        it("returns Invalid input", () => {
            expect(counterApp()).toMatch("Invalid input");
        })
    })

    it('returns the number of names that appear', () => {
        expect(counterApp(['Adit', 'Rekti', 'Fahri', 'Acil', 'Fahri', 'Adit', 'Rekti', 'Adit', 'Fahri', 'Fahri'])).toEqual({ Adit: 3, Rekti: 2, Fahri: 4, Acil: 1 });
        expect(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6])).toEqual({ '5': 4, '6': 3, '7': 5 });
    })
})