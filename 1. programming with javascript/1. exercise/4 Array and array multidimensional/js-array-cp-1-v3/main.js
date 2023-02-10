function splitToArr(str) {
    if (str === undefined) {
        return "Invalid input";
    }
    if (str === "") {
        return "Data not available";
    }

    let names = str.split(/[^a-zA-Z\.]+/);
    names = names.map((name) => name[0].toUpperCase() + name.slice(1));
    return names;
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"));
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
