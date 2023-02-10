const { expect, describe, it } = require('@jest/globals');
const travelDiscount = require('./main');

describe('CAMP Travel', () => {
    describe("when there is a status code that is not STD and CORP in the voucher id", () => {
        it('return error message "Maaf, voucher yang anda miliki tidak valid!"', () => {
            expect(travelDiscount("S388-8-0197621", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("ST3888-0-197621", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("C388-8-0197621", 8)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("CO388-8-0197621", 8)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("COR388-8-019-762", 8)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("XY3888-0-197621", 21)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("XYZ3888-0-197621", 31)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
        })
    })

    describe("when the STD status on the voucher code doesn't have the correct order", () => {
        it('return error message "Maaf, voucher yang anda miliki tidak valid!"', () => {
            expect(travelDiscount("TSD388-8-197621", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("DST388-8-0197621", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("TDS388-8-0197621", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("DTS388-8-0197621", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("SDT388-8-0197621", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
        })
    })

    describe("when the CORP status on the voucher code doesn't have the correct order", () => {
        it('return error message "Maaf, voucher yang anda miliki tidak valid!"', () => {
            expect(travelDiscount("CRPO3888-1-9721", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("CPOR3888-1-9721", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("COPR3888-1-9721", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("RPOC3888-1-9721", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("RPCO3888-1-9721", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
            expect(travelDiscount("OPRC3888-1-9721", 9)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
        })
    })

    describe("when there is no status code in the voucher id", () => {
        it('return error message "Maaf, voucher yang anda miliki tidak valid!"', () => {
            expect(travelDiscount("38880197-1-621", 1000)).toMatch("Maaf, voucher yang anda miliki tidak valid!");
        })
    })

    describe("when there is a STD status code on the voucher id", () => {
        it('returns message and total price for STUDENT group', () => {
            expect(travelDiscount("STD3888-0-197621", 2)).toMatch("Selamat! Voucher untuk STUDENT dengan id STD3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 40000.");
        })
    })
    describe("when there is a CORP status code on the voucher id", () => {
        it('returns message and total price for CORPORATE group', () => {
            expect(travelDiscount("CORP3888-0-197621", 2)).toMatch("Selamat! Voucher untuk CORPORATE dengan id CORP3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 100000.");
        })
    })

    describe("when the status obtained is STUDENT and the number of groups is below or equal to 20", () => {
        it('return message and total price without discount', () => {
            expect(travelDiscount("STD3888-0-197621", 1)).toMatch("Selamat! Voucher untuk STUDENT dengan id STD3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 20000.");
            expect(travelDiscount("STD3888-0-197621", 20)).toMatch("Selamat! Voucher untuk STUDENT dengan id STD3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 400000.");
        })
    })

    describe("when the status obtained is CORPORATE and the number of groups is below or equal to 30", () => {
        it('return message and total price without discount', () => {
            expect(travelDiscount("CORP3888-0-197621", 1)).toMatch("Selamat! Voucher untuk CORPORATE dengan id CORP3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 50000.");
            expect(travelDiscount("CORP3888-0-197621", 30)).toMatch("Selamat! Voucher untuk CORPORATE dengan id CORP3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 1500000.");
        })
    })

    describe("when the status obtained is STUDENT and the number of groups is more than 20", () => {
        it('return message and total price with discount', () => {
            expect(travelDiscount("STD3888-0-197621", 40)).toMatch("Selamat! Voucher untuk STUDENT dengan id STD3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 640000.");
        })
    })

    describe("when the status obtained is CORPORATE and the number of groups is more than 30", () => {
        it('return message and total price with discount', () => {
            expect(travelDiscount("CORP3888-0-197621", 60)).toMatch("Selamat! Voucher untuk CORPORATE dengan id CORP3888-0-197621 berhasil di redeem, total yang harus dibayarkan sebesar Rp. 2250000.");
        })
    })
})