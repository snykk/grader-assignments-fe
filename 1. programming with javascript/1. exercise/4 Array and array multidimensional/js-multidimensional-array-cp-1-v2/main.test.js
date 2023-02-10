const { expect, describe, it } = require('@jest/globals');
const travelSeat = require('./main');

describe("Travel seat", () => {
    describe("when seat column value is 0 or minus", () => {
        it('returns Invalid number', () => {
            const data1 = ["Ayah", "Ibu", "Kakak", "Adik"]
            const data2 = ["Paman", "Bibi", "Sepupu"]
            expect(travelSeat(data1, 0)).toMatch("Invalid number");
            expect(travelSeat(data2, -2)).toMatch("Invalid number");
        })
    })
    describe("when no passengers available", () => {
        it("returns Oops! tickets not sold!", () => {
            expect(travelSeat([], 2)).toMatch("Oops! tickets not sold!");
            expect(travelSeat([], 1)).toMatch("Oops! tickets not sold!");
        })
    })

    describe("when there are still empty seats", () => {
        it('returns a multidimensional array with seat available as the value of its elements', () => {
            const data1 = ["Ayah", "Ibu", "Kakak", "Adik"]
            const data2 = ["Paman", "Bibi", "Sepupu"]
            const data3 = ["Kakek", "Nenek"]
            expect(travelSeat(data1, 3)).toEqual([["Adik", "Ayah", "Ibu"], ["Kakak", "Seat available", "Seat available"]]);
            expect(travelSeat(data2, 2)).toEqual([["Bibi", "Paman"], ["Sepupu", "Seat available"]]);
            expect(travelSeat(data3, 9)).toEqual([["Kakek", "Nenek", "Seat available", "Seat available", "Seat available", "Seat available", "Seat available", "Seat available", "Seat available"]]);
        })
    })

    it('returns multidimensional array', () => {
        const data1 = ["Dimitri", "Alvin", "Arrizal", "Indra"]
        const data2 = ["Andrean", "Patra", "Ardi", "Rudy", "Idham", "Bagus"]
        expect(travelSeat(data1, 2)).toEqual([["Alvin", "Arrizal"], ["Dimitri", "Indra"]]);
        expect(travelSeat(data2, 3)).toEqual([["Andrean", "Ardi", "Bagus"], ["Idham", "Patra", "Rudy"]]);
    })
})