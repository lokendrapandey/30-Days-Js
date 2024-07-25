

// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// multiply.js
function multiply(a, b) {
    return a * b;
}

// utils.js
const PI = 3.14;

function circleArea(radius) {
    return PI * radius * radius;
}

function circleCircumference(radius) {
    return 2 * PI * radius;
}

    // PI,
    exports.circleArea = circleArea;
exports.circleCircumference=circleCircumference;

// module.exports = multiply;
exports.multiply= multiply;
exports.add = add;
exports.subtract = subtract;
