const axios = require('axios');
const _ = require('lodash');
const {add, subtract, multiply,} = require("./add")
const utils = require("./utils")
const person = require('./person')

console.log(add(3,3));

person.greet();

console.log(`PI: ${utils.PI}`); // Output: PI: 3.14
console.log(`Area: ${utils.circleArea(5)}`); // Output: Area: 78.5
console.log(`Circumference: ${utils.circleCircumference(5)}`); // Output: Circumference: 31.400000000000002
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 2


const numbers = [10, 5, 8, 3];
const sortedNumbers = _.sortBy(numbers);

console.log(sortedNumbers); // Output: [3, 5, 8, 10]


// main.js

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
