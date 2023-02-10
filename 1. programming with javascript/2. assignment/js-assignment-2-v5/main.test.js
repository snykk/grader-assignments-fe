const { expect, describe, it } = require('@jest/globals');
const { convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData } = require('./main');

describe('convertItems', () => {
    it('Should convert an array of string into a multi dimensional array', () => {
        const items1 = [
            "Spakbor Gordon|150000|variation",
            "Head Lamp",
            "USD KX150|8500000|bodyParts",
            "Handle Expedition|275000|variation",
            "Karet Body",
            "Body set KTM|1899950|bodyParts",
            "Jok Gordon|250000|variation",
            "Behel Bodyset Gordon",
            "CDI BRT KLX|625000|electricity",
            "Cover jok KLX|185000|variation",
        ]

        const items2 = [
            "KAYABA OS|177380|bodyParts",
            "KAYABA OC|205800|bodyParts",
            "Boba black",
            "Cover full tank|159000|variation",
            "Aki GS ASTRA MF|196000|electricity",
            "Fabio black",
            "Porte sling",
        ]

        expect(convertItems(items1)).toEqual([
            ["Spakbor Gordon", "150000", "variation"],
            ["Head Lamp"],
            ["USD KX150", "8500000", "bodyParts"],
            ["Handle Expedition", "275000", "variation"],
            ["Karet Body"],
            ["Body set KTM", "1899950", "bodyParts"],
            ["Jok Gordon", "250000", "variation"],
            ["Behel Bodyset Gordon"],
            ["CDI BRT KLX", "625000", "electricity"],
            ["Cover jok KLX", "185000", "variation"]
        ]);

        expect(convertItems(items2)).toEqual([
            ["KAYABA OS", "177380", "bodyParts"],
            ["KAYABA OC", "205800", "bodyParts"],
            ["Boba black"],
            ["Cover full tank", "159000", "variation"],
            ["Aki GS ASTRA MF", "196000", "electricity"],
            ["Fabio black"],
            ["Porte sling"]
        ]);
    })
})

describe("filterItems", () => {
    describe("when the item does not have a price and category", () => {
        it('Should filter an items without price and category', () => {
            const items1 = [
                ["Spakbor Gordon", "150000", "variation"],
                ["Head Lamp"],
                ["USD KX150", "8500000", "bodyParts"],
                ["Handle Expedition", "275000", "variation"],
                ["Karet Body"],
                ["Body set KTM", "1899950", "bodyParts"],
                ["Jok Gordon", "250000", "variation"],
                ["Behel Bodyset Gordon"],
                ["CDI BRT KLX", "625000", "electricity"],
                ["Cover jok KLX", "185000", "variation"],
            ];

            const items2 = [
                ["KAYABA OS", "177380", "bodyParts"],
                ["KAYABA OC", "205800", "bodyParts"],
                ["Boba black"],
                ["Cover full tank", "159000", "variation"],
                ["Aki GS ASTRA MF", "196000", "electricity"],
                ["Fabio black"],
                ["Porte sling"]
            ];

            expect(filterItems(items1)).toEqual([
                ["Spakbor Gordon", 150000, "variation"],
                ["USD KX150", 8500000, "bodyParts"],
                ["Handle Expedition", 275000, "variation"],
                ["Body set KTM", 1899950, "bodyParts"],
                ["Jok Gordon", 250000, "variation"],
                ["CDI BRT KLX", 625000, "electricity"],
                ["Cover jok KLX", 185000, "variation"],
            ])

            expect(filterItems(items2)).toEqual([
                ["KAYABA OS", 177380, "bodyParts"],
                ["KAYABA OC", 205800, "bodyParts"],
                ["Cover full tank", 159000, "variation"],
                ["Aki GS ASTRA MF", 196000, "electricity"]
            ])
        })
    })

    describe("when item price is a string", () => {
        it("should return item price with integer data type", () => {
            const items1 = [
                ["Spakbor Gordon", "150000", "variation"],
                ["USD KX150", "8500000", "bodyParts"],
                ["Handle Expedition", "275000", "variation"],
                ["Body set KTM", "1899950", "bodyParts"],
                ["Jok Gordon", "250000", "variation"],
                ["CDI BRT KLX", "625000", "electricity"],
                ["Cover jok KLX", "185000", "variation"]
            ]

            const items2 = [
                ["KAYABA OS", "177380", "bodyParts"],
                ["KAYABA OC", "205800", "bodyParts"],
                ["Cover full tank", "159000", "variation"],
                ["Aki GS ASTRA MF", "196000", "electricity"]
            ]

            expect(filterItems(items1)).toEqual([
                ["Spakbor Gordon", 150000, "variation"],
                ["USD KX150", 8500000, "bodyParts"],
                ["Handle Expedition", 275000, "variation"],
                ["Body set KTM", 1899950, "bodyParts"],
                ["Jok Gordon", 250000, "variation"],
                ["CDI BRT KLX", 625000, "electricity"],
                ["Cover jok KLX", 185000, "variation"]
            ])

            expect(filterItems(items2)).toEqual([
                ["KAYABA OS", 177380, "bodyParts"],
                ["KAYABA OC", 205800, "bodyParts"],
                ["Cover full tank", 159000, "variation"],
                ["Aki GS ASTRA MF", 196000, "electricity"]
            ])
        })
    })
})

describe("generateSpareParts", () => {
    it('Should return spare parts data in the form of an array of objects with the name, price and category as the key', () => {
        const items1 = [
            ["Spakbor Gordon", 150000, "variation"],
            ["USD KX150", 8500000, "bodyParts"],
            ["Handle Expedition", 275000, "variation"],
            ["Body set KTM", 1899950, "bodyParts"],
            ["Jok Gordon", 250000, "variation"],
            ["CDI BRT KLX", 625000, "electricity"],
            ["Cover jok KLX", 185000, "variation"],
        ];

        const items2 = [
            ["KAYABA OS", 177380, "bodyParts"],
            ["KAYABA OC", 205800, "bodyParts"],
            ["Cover full tank", 159000, "variation"],
            ["Aki GS ASTRA MF", 196000, "electricity"]
        ]

        expect(generateSpareParts(items1)).toEqual([
            { name: 'Spakbor Gordon', price: 150000, category: 'variation' },
            { name: 'USD KX150', price: 8500000, category: 'bodyParts' },
            { name: 'Handle Expedition', price: 275000, category: 'variation' },
            { name: 'Body set KTM', price: 1899950, category: 'bodyParts' },
            { name: 'Jok Gordon', price: 250000, category: 'variation' },
            { name: 'CDI BRT KLX', price: 625000, category: 'electricity' },
            { name: 'Cover jok KLX', price: 185000, category: 'variation' }
        ])

        expect(generateSpareParts(items2)).toEqual([
            { name: 'KAYABA OS', price: 177380, category: 'bodyParts' },
            { name: 'KAYABA OC', price: 205800, category: 'bodyParts' },
            { name: 'Cover full tank', price: 159000, category: 'variation' },
            { name: 'Aki GS ASTRA MF', price: 196000, category: 'electricity' }
        ])
    })
})

describe("itemsStatistics", () => {
    it('Should return a statistic for all categories', () => {
        const items1 = [
            ["Spakbor Gordon", 150000, "variation"],
            ["USD KX150", 8500000, "bodyParts"],
            ["Handle Expedition", 275000, "variation"],
            ["Body set KTM", 1899950, "bodyParts"],
            ["Jok Gordon", 250000, "variation"],
            ["CDI BRT KLX", 625000, "electricity"],
            ["Cover jok KLX", 185000, "variation"],
        ];

        const items2 = [
            ["KAYABA OS", 177380, "bodyParts"],
            ["Cover full tank", 159000, "variation"],
            ["KAYABA OC", 205800, "bodyParts"],
            ["Aki GS ASTRA MF", 196000, "electricity"]
        ]

        expect(itemsStatistics(items1)).toEqual({ variation: 4, bodyParts: 2, electricity: 1 })
        expect(itemsStatistics(items2)).toEqual({ bodyParts: 2, variation: 1, electricity: 1 })
    })
})

describe("generateItemsData", () => {
    it('Should generate spare parts and statistic as an object', () => {
        const items1 = [
            "Spakbor Gordon|150000|variation",
            "Head Lamp",
            "USD KX150|8500000|bodyParts",
            "Handle Expedition|275000|variation",
            "Karet Body",
            "Body set KTM|1899950|bodyParts",
            "Jok Gordon|250000|variation",
            "Behel Bodyset Gordon",
            "CDI BRT KLX|625000|electricity",
            "Cover jok KLX|185000|variation",
        ]

        const items2 = [
            "KAYABA OS|177380|bodyParts",
            "KAYABA OC|205800|bodyParts",
            "Boba black",
            "Cover full tank|159000|variation",
            "Aki GS ASTRA MF|196000|electricity",
            "Fabio black",
            "Porte sling",
        ]
        
        expect(generateItemsData(items1)).toEqual({
            spare_parts: [
                { name: 'Spakbor Gordon', price: 150000, category: 'variation' },
                { name: 'USD KX150', price: 8500000, category: 'bodyParts' },
                { name: 'Handle Expedition', price: 275000, category: 'variation' },
                { name: 'Body set KTM', price: 1899950, category: 'bodyParts' },
                { name: 'Jok Gordon', price: 250000, category: 'variation' },
                { name: 'CDI BRT KLX', price: 625000, category: 'electricity' },
                { name: 'Cover jok KLX', price: 185000, category: 'variation' }
            ],
            statistics: { variation: 4, bodyParts: 2, electricity: 1 }
        })

        expect(generateItemsData(items2)).toEqual({
            spare_parts: [
                { name: 'KAYABA OS', price: 177380, category: 'bodyParts' },
                { name: 'KAYABA OC', price: 205800, category: 'bodyParts' },
                { name: 'Cover full tank', price: 159000, category: 'variation' },
                { name: 'Aki GS ASTRA MF', price: 196000, category: 'electricity' }
            ],
            statistics: { bodyParts: 2, variation: 1, electricity: 1 }
        })
    })
})