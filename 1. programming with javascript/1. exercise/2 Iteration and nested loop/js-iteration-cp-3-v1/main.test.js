const { expect, describe, it } = require('@jest/globals');
const printNumber = require('./main');

describe('printNumber', () => {
    describe("when total number below 3", () => {
        it('returns a number "1" or "12"', () => {
            expect(printNumber(1)).toBe("1");
            expect(printNumber(2)).toBe("12");
        })
    })
    describe("when total number equal to 3", () => {
        it('returns "123"', () => {
            expect(printNumber(3)).toBe("123");
        })
    })

    describe("when total number greather than 3", () => {
        it('returns as many numbers as the total number', () => {
            expect(printNumber(4)).toBe("1231");
            expect(printNumber(6)).toBe("123123");
            expect(printNumber(12)).toBe("123123123123");
            expect(printNumber(30)).toBe("123123123123123123123123123123");
        })
    })
})
