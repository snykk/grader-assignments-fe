function printNumber(totalNumber) {
    var res = "";
    for (let i = 0; i < totalNumber; i++) {
        res += (i % 3) + 1;
    }
    return res; // TODO: replace this
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
