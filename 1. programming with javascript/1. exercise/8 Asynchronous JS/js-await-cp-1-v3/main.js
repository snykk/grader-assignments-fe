async function calculate(number1, number2) {
    return new Promise((resolve, reject) => {
        if (number1 === 0 && number2 === 0) {
            reject("number1 and number2 cannot be 0");
        } else if (number1 % 2 === 0 && number2 % 2 === 0) {
            resolve(number1 - number2);
        } else if (number1 % 2 === 0 && number2 % 2 !== 0) {
            resolve(number1 + number2);
        } else {
            resolve(number1 * number2);
        }
    });
}

module.exports = calculate;
