// Exercise 2 - app.js

const people = require("./data.js");

function getAverageAge(arr) {
    const total = arr.reduce((sum, person) => sum + person.age, 0);
    const avg = total / arr.length;
    return avg;
}

const average = getAverageAge(people);
console.log(`Number of people: ${people.length}`);
console.log(`Average age: ${average.toFixed(2)}`);
