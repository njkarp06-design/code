// Exercise 2 - app.js
// importing the people array from data.js using ES6 syntax

import people from "./data.js";

// function to calculate the average age
function getAverageAge(arr) {
    const total = arr.reduce((sum, person) => sum + person.age, 0);
    const avg = total / arr.length;
    return avg;
}

const average = getAverageAge(people);
console.log(`Number of people: ${people.length}`);
console.log(`Average age: ${average.toFixed(2)}`);
