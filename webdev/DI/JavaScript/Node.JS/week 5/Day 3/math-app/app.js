// Exercise 5 - app.js
// using lodash and our custom math module together

const _ = require("lodash");
const math = require("./math");

// using our own math functions
const sum = math.add(15, 27);
const product = math.multiply(6, 9);

console.log(`15 + 27 = ${sum}`);
console.log(`6 x 9 = ${product}`);

// using lodash to work with a list of numbers
const numbers = [4, 8, 15, 16, 23, 42];

const largest = _.max(numbers);
const smallest = _.min(numbers);
const rounded = _.map(numbers, n => _.round(n / 3, 2));

console.log(`\nNumbers: ${numbers}`);
console.log(`Largest: ${largest}`);
console.log(`Smallest: ${smallest}`);
console.log(`Each divided by 3 (rounded): ${rounded}`);
