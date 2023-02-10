function counterApp(arr) {
    if (arr === undefined) return "Invalid input";

    if (arr.length === 0) return "Data not found";

    let result = {};

    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]] === undefined) {
            result[arr[i]] = 1;
            continue;
        }
        result[arr[i]]++;
    }
    return result;
}

console.log(counterApp(["Hikman", "Naufal", "Kanda", "Arya", "Kanda", "Hikman", "Naufal", "Hikman", "Kanda", "Kanda"]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
