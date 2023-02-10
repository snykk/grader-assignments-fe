// TODO: answer here
exports.checkDatatype = function (input) {
    if (typeof input === "string") {
        return "string";
    } else if (typeof input === "number") {
        return "number";
    } else if (typeof input === "boolean") {
        return "boolean";
    } else if (typeof input === "function") {
        return "function";
    } else if (Array.isArray(input)) {
        return "array";
    } else if (input === null) {
        return "null";
    } else if (typeof input === "object") {
        return "object";
    } else {
        return "Unknown data type";
    }
};
