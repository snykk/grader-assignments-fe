const { expect, describe, it } = require('@jest/globals');
const discountChecker = require('./main');

describe("Discount Checker", () => {
    describe("when all customers are members", () => {
        it('returns all cutomers data', () => {
            let data = [
                ["$ 2", "member"],
                ["$ 1", "member"],
                ["$ 2", "member"],
                ["$ 4", "member"]
            ]
            expect(discountChecker(data, "31-12-2022")).toEqual([
                ["$ 2", "member"],
                ["$ 1", "member"],
                ["$ 2", "member"],
                ["$ 4", "member"]
            ]);
        })
    })

    describe("when all customers are not members", () => {
        describe("when the date is even", () => {
            it("return customer data with an even nominal price", () => {
                let data = [
                    ["$ 2", "non-member"],
                    ["$ 1", "non-member"],
                    ["$ 2", "non-member"],
                    ["$ 4", "non-member"]
                ]
                expect(discountChecker(data, "20-10-2022")).toEqual([
                    ["$ 2", "non-member"],
                    ["$ 2", "non-member"],
                    ["$ 4", "non-member"]
                ]);
            })
        })

        describe("when the date is odd", () => {
            it("return customer data with an odd nominal price", () => {
                let data = [
                    ["$ 5", "non-member"],
                    ["$ 1", "non-member"],
                    ["$ 7", "non-member"],
                    ["$ 4", "non-member"]
                ]
                expect(discountChecker(data, "11-08-2022")).toEqual([
                    ["$ 5", "non-member"],
                    ["$ 1", "non-member"],
                    ["$ 7", "non-member"]
                ]);
            })
        })
    })

    it("return customer data with nominal price according to date", () => {
        let data1 = [
            ["$ 50", "member"],
            ["$ 11", "non-member"],
            ["$ 77", "member"],
            ["$ 42", "non-member"]
        ]
        let data2 = [
            ["$ 90", "non-member"],
            ["$ 63", "member"],
            ["$ 22", "member"],
            ["$ 81", "non-member"]
        ]

        expect(discountChecker(data1, "11-08-2022")).toEqual([
            ["$ 50", "member"],
            ["$ 11", "non-member"],
            ["$ 77", "member"]
        ]);
        expect(discountChecker(data2, "24-01-2022")).toEqual([
            ["$ 90", "non-member"],
            ["$ 63", "member"],
            ["$ 22", "member"],
        ]);
    })

})