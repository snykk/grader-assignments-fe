function trasureHunter(dailyLog) {
    var sparrowProperty = 0;
    for (let char of dailyLog) {
        switch (char) {
            case "$":
                sparrowProperty += 100;
            case "x":
                if (sparrowProperty < 10) {
                    sparrowProperty = 0;
                    continue;
                }
                sparrowProperty -= 10;
            case "#":
                sparrowProperty /= 2;
        }
    }
    return sparrowProperty; // TODO: replace this
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
