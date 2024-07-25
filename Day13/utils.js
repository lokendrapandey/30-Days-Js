// utils.js
const PI = 3.14;

function circleArea(radius) {
    return PI * radius * radius;
}

function circleCircumference(radius) {
    return 2 * PI * radius;
}

module.exports = {
    PI,
    circleArea,
    circleCircumference
};
