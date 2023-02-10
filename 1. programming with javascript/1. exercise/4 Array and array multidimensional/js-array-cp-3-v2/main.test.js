const { expect, describe, it } = require('@jest/globals');
const dataSelection = require('./main');

describe("dataSelection", () => {
    describe("when data is an empty array", () => {
        it('returns Command not found', () => {
            expect(dataSelection([], 2, 3)).toMatch("Data not found");
            expect(dataSelection([], 1, 0)).toMatch("Data not found");
        })
    })

    describe("when amount and start number is a string", () => {
        it("returns Invalid command", () => {
            const data1 = ["Dimitri", "Alvin", "Arrizal", "Indra"]
            const data2 = ["Andrean", "Patra", "Ardi", "Rudy"]
            expect(dataSelection(data1, "2", "3")).toMatch("Invalid command");
            expect(dataSelection(data2, "2", "1")).toMatch("Invalid command");
        })
    })

    describe("when amount or start number is a string", () => {
        it("returns Invalid command", () => {
            const data1 = ["Dimitri", "Alvin", "Arrizal", "Indra"]
            const data2 = ["Andrean", "Patra", "Ardi", "Rudy"]
            expect(dataSelection(data1, 2, "3")).toMatch("Invalid command");
            expect(dataSelection(data2, "2", 1)).toMatch("Invalid command");
        })
    })

    describe("when amount is below 1 ", () => {
        it("returns Minimum amount is 1", () => {
            const data1 = ["Dimitri", "Alvin", "Arrizal", "Indra"]
            const data2 = ["Andrean", "Patra", "Ardi", "Rudy"]
            expect(dataSelection(data1, 0, 2)).toMatch("Minimum amount is 1");
            expect(dataSelection(data2, -1, 1)).toMatch("Minimum amount is 1");
        })
    })

    describe("when start number below 0", () => {
        it("returns Starting number cannot be below 0", () => {
            const data1 = ["Dimitri", "Alvin", "Arrizal", "Indra"]
            const data2 = ["Andrean", "Patra", "Ardi", "Rudy"]
            expect(dataSelection(data1, 3, -1)).toMatch("Starting number cannot be below 0");
            expect(dataSelection(data2, 4, -2)).toMatch("Starting number cannot be below 0");
        })
    })

    it("returns an array with amount and starting number by parameter", () => {
        const data1 = ["Dimitri", "Alvin", "Arrizal", "Indra"]
        const data2 = ["Andrean", "Patra", "Ardi", "Rudy"]
        expect(dataSelection(data1, 2, 3)).toEqual(["Arrizal", "Indra"]);
        expect(dataSelection(data2, 3, 2)).toEqual(["Patra", "Ardi", "Rudy"]);
    })
})