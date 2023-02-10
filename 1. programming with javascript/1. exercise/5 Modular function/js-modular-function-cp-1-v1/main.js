function kelvinToCelsius(kelvin) {
    var result = kelvin - 273.15;
    return result.round(2);
}

function kelvinToFahrenheit(kelvin) {
    var result = ((kelvin - 273.15) * 9) / 5 + 32;
    return result.round(2);
}

function celsiusToFahrenheit(celsius) {
    var result = (celsius * 9) / 5 + 32;
    return result.round(2);
}

function celsiusToKelvin(celsius) {
    var result = celsius + 273.15;
    return result.round(2);
}

function fahrenheitToKelvin(fahrenheit) {
    var result = ((fahrenheit - 32) * 5) / 9 + 273.15;
    return result.round(2);
}

function fahrenheitToCelsius(fahrenheit) {
    var result = ((fahrenheit - 32) * 5) / 9;
    return result.round(2);
}

// custom method of Number
Number.prototype.round = function (p) {
    p = p || 10;
    return parseFloat(this.toFixed(p));
};

function convertTemperature(temperature, initialUnit, finalUnit) {
    var result = 0;
    switch (initialUnit) {
        case "C":
            result = finalUnit === "F" ? celsiusToFahrenheit(temperature) : celsiusToKelvin(temperature);
            break;
        case "K":
            result = finalUnit === "C" ? kelvinToCelsius(temperature) : kelvinToFahrenheit(temperature);
            break;
        case "F":
            result = finalUnit === "C" ? fahrenheitToCelsius(temperature) : fahrenheitToKelvin(temperature);
            break;
    }
    return result;
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
    kelvinToCelsius,
    kelvinToFahrenheit,
    celsiusToFahrenheit,
    celsiusToKelvin,
    fahrenheitToKelvin,
    fahrenheitToCelsius,
    convertTemperature,
};
