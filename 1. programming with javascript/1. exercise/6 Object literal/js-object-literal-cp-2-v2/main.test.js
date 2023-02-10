const { expect, describe, it } = require('@jest/globals');
const stockOpname = require('./main');

describe("stockOpname", () => {
    describe("when data is an empty array", () => {
        it('returns Data not found', () => {
            expect(stockOpname([])).toMatch("Data not found");
        })
    })

    it('returns the reduced value of the object', () => {
        let data1 = [
            ["Processor", 2],
            ["SSD", 1],
            ["Cooling", 5],
            ["Motherboard", 1],
            ["Ram", 10],
            ["PSU", 10],
        ]

        expect(stockOpname(data1)).toEqual({
            "Ram": 0,
            "Motherboard": 3,
            "Processor": 3,
            "SSD": 7,
            "PSU": 2,
            "Cooling": 0
        });
    })
})