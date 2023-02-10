function countAndSum(number) {
    var res = 0;
    for (let i = 0; i < number; i++) {
        res += (i % 3) + 1;
    }
    return res; // TODO: replace this
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
