const { expect, describe, it } = require('@jest/globals');
const splitToArr = require('./main.js');

describe("splitToArr", () => {
    describe("when input is undefined", () => {
        it("returns invalid input message", () => {
            expect(splitToArr()).toMatch("Invalid input");
        })
    })
    describe("when input is an empty string", () => {
        it("returns data not available message", () => {
            expect(splitToArr("")).toMatch("Data not available")
        })
    })

    describe("when input is a string", () => {

        describe("when there is a character '.' (dot) in a name", () => {
            const data1 = "dito.bagus-aditira.jamhuri;afista.pratama-eddy.permana"
            const data2 = "djarot.purnomo-djalal.kurnia;ismet.sofyan-gunawam.sasongko"

            it("returns an array of strings with the dot character as part of the name", () => {
                expect(splitToArr(data1)).toEqual(["Dito.bagus", "Aditira.jamhuri", "Afista.pratama", "Eddy.permana"]);
                expect(splitToArr(data2)).toEqual(["Djarot.purnomo", "Djalal.kurnia", "Ismet.sofyan", "Gunawam.sasongko"]);
            })
        })

        it('split input to an array', () => {
            const data1 = "maulida;vika-wulan;miranda"
            const data2 = "tegar;ojan-edgar;tya"
            expect(splitToArr(data1)).toEqual(["Maulida", "Vika", "Wulan", "Miranda"]);
            expect(splitToArr(data2)).toEqual(["Tegar", "Ojan", "Edgar", "Tya"]);
        })
    })
})