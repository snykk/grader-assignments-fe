const { expect, describe, it } = require('@jest/globals');
const vocalCounter = require('./main');

describe("vocalCounter", () => {
    describe("when there is no vocal character", () => {
        it('returns 0', () => {
            let data1 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
            let data2 = [1, 2, 3, 4, 5, 6, 7]
            expect(vocalCounter(data1)).toMatch("Tidak ada huruf vokal yang ditemukan");
            expect(vocalCounter(data2)).toMatch("Tidak ada huruf vokal yang ditemukan");
        })
    })

    describe("when there is vocal character", () => {
        it('returns 0', () => {
            let data1 = ['z', 'a', 'c', 'I', 'b', 'u', 'm']
            let data2 = [1, 'E', 3, 'o', 5]
            expect(vocalCounter(data1)).toMatch("Jumlah vokal yang ditemukan sebanyak 3 berupa aIu");
            expect(vocalCounter(data2)).toMatch("Jumlah vokal yang ditemukan sebanyak 2 berupa Eo");
        })
    })
    
})