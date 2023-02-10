function discountChecker(costumers, date) {
    var res = [];
    var arrDate = date.split("-");
    var isEven = +arrDate[0] % 2 == 0 ? true : false;
    for (let char of costumers) {
        if ((+char[0].split(" ")[1] % 2 == 0) === isEven || char[1] === "member") {
            res.push(char);
        }
    }

    return res; // TODO: replace this
}

// let costumers = [
//   ["$ 228", "member"],
//   ["$ 19", "non-member"],
//   ["$ 238", "non-member"],
//   ["$ 49", "member"],
// ];

// console.log(discountChecker(costumers, "28-10-2022"));

// var costumers2 = [
//   ["$ 754", "member"],
//   ["$ 233", "member"],
//   ["$ 31", "non-member"],
//   ["$ 332", "non-member"],
// ];

// console.log(discountChecker(costumers2, "11-06-2022"));

let data1 = [
    ["$ 50", "member"],
    ["$ 11", "non-member"],
    ["$ 77", "member"],
    ["$ 42", "non-member"],
];

console.log(discountChecker(data1, "11-08-2022"));
module.exports = discountChecker;
