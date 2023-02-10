function vocalCounter(array) {
    var vowel = "";
    var count = 0;
    for (let char of array) {
        if (["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"].indexOf(char) !== -1) {
            count++;
            vowel += char;
        }
    }

    if (count == 0) {
        return "Tidak ada huruf vokal yang ditemukan";
    }

    return `Jumlah vokal yang ditemukan sebanyak ${count} berupa ${vowel}`; // TODO: replace this
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
