function convertItems(items) {
    var convertedItems = [];
    for (let item of items) {
        let arrItem = item.split("|");
        convertedItems.push(arrItem);
    }
    return convertedItems;
}

function filterItems(items) {
    var filteredItems = [];
    for (let item of items) {
        if (item.length != 3) {
            continue;
        }
        item[1] = +item[1];
        filteredItems.push(item);
    }
    return filteredItems;
}

function generateSpareParts(items) {
    var sparePartsArray = [];
    for (let item of items) {
        sparePartsArray.push({
            name: item[0],
            price: item[1],
            category: item[2],
        });
    }
    return sparePartsArray;
}

function itemsStatistics(items) {
    var itemData = {};
    for (let item of items) {
        if (itemData[item[2]] === undefined) {
            itemData[item[2]] = 1;
            continue;
        }

        itemData[item[2]] += 1;
    }
    return itemData;
}

function generateItemsData(items) {
    var convertedItems = convertItems(items);
    var filteredItems = filterItems(convertedItems);
    var sparePartsArray = generateSpareParts(filteredItems);
    var itemStatistics = itemsStatistics(filteredItems);

    return {
        spare_parts: sparePartsArray,
        statistics: itemStatistics,
    };
}

const items = [
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
];

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData,
};
