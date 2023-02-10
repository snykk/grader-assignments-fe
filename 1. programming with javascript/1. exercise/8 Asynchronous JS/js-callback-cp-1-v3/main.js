function calculate(number1, number2, callback) {
    setTimeout(() => {
        var result;
        if (number1 % 2 === 0 && number2 % 2 === 0) {
            result = number1 - number2;
        } else if (number1 % 2 === 0 && number2 % 2 !== 0) {
            result = number1 + number2;
        } else {
            result = number1 * number2;
        }
        callback(result);
    }, 2000);
}

module.exports = calculate;
