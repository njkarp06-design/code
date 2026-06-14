// =====================================
// START: exercise1/products.js
// =====================================
// Exercise 1 - products.js
// array of products with name, price and category

const products = [
    { name: "Apple", price: 1.5, category: "Fruit" },
    { name: "Laptop", price: 999.99, category: "Electronics" },
    { name: "Notebook", price: 3.25, category: "Stationery" },
    { name: "Banana", price: 0.75, category: "Fruit" },
    { name: "Headphones", price: 59.99, category: "Electronics" },
];

module.exports = products;
// =====================================
// END: exercise1/products.js
// =====================================


// =====================================
// START: exercise1/shop.js
// =====================================
// Exercise 1 - shop.js
// importing the products array from products.js

const products = require("./products");

// function to find a product by name
function findProduct(productName) {
    const found = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (found) {
        console.log(`Product: ${found.name}`);
        console.log(`Price: $${found.price}`);
        console.log(`Category: ${found.category}`);
        console.log("---");
    } else {
        console.log(`"${productName}" was not found in the store.`);
        console.log("---");
    }
}

// testing the function with a few product names
findProduct("Apple");
findProduct("Laptop");
findProduct("Notebook");
findProduct("TV"); // this one doesnt exist
// =====================================
// END: exercise1/shop.js
// =====================================


// =====================================
// START: exercise2/data.js
// =====================================
// Exercise 2 - data.js
// array of people using ES6 export

const people = [
    { name: "Alice", age: 24, location: "New York" },
    { name: "Bob", age: 31, location: "London" },
    { name: "Carlos", age: 19, location: "Madrid" },
    { name: "Diana", age: 27, location: "Toronto" },
    { name: "Ethan", age: 35, location: "Sydney" },
];

export default people;
// =====================================
// END: exercise2/data.js
// =====================================


// =====================================
// START: exercise2/app.js
// =====================================
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
// =====================================
// END: exercise2/app.js
// =====================================


// =====================================
// START: exercise3/filemanager.js
// =====================================
// Exercise 3 - fileManager.js
// module for reading and writing files using fs

const fs = require("fs");

// reads the content of a file and prints it
function readFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, "utf-8");
        console.log(`Reading from "${filePath}":`);
        console.log(content);
    } catch (err) {
        console.log("Could not read file:", err.message);
    }
}

// writes content to a file
function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`Successfully wrote to "${filePath}"`);
    } catch (err) {
        console.log("Could not write to file:", err.message);
    }
}

module.exports = { readFile, writeFile };
// =====================================
// END: exercise3/filemanager.js
// =====================================


// =====================================
// START: exercise3/app.js
// =====================================
// Exercise 3 - app.js
// using the fileManager module to read and write files

const { readFile, writeFile } = require("./filemanager");

// reading content from Hello World.txt
readFile("./hello-world.txt");

// writing new content to bye-world.txt
writeFile("./bye-world.txt", "Writing to the file");

// reading bye-world.txt again to confirm the write worked
readFile("./bye-world.txt");
// =====================================
// END: exercise3/app.js
// =====================================


// =====================================
// START: file-explorer/read-directory.js
// =====================================
// Exercise 7 - read-directory.js
// lists all files in a given directory

const fs = require("fs");
const path = require("path");

// reading the current directory
const dir = "./";

const files = fs.readdirSync(dir);

console.log(`Files in "${path.resolve(dir)}":`);
files.forEach(file => {
    console.log(" -", file);
});
// =====================================
// END: file-explorer/read-directory.js
// =====================================


// =====================================
// START: file-explorer/copy-file.js
// =====================================
// Exercise 7 - copy-file.js
// reads content from source.txt and writes it to destination.txt

const fs = require("fs");

const sourceFile = "./source.txt";
const destFile = "./destination.txt";

// read from source
const content = fs.readFileSync(sourceFile, "utf-8");
console.log("Read from source.txt:");
console.log(content);

// write that content to destination
fs.writeFileSync(destFile, content, "utf-8");
console.log("Copied content to destination.txt successfully.");
// =====================================
// END: file-explorer/copy-file.js
// =====================================


// =====================================
// START: math-app/math.js
// =====================================
// Exercise 5 - math.js
// simple custom module with add and multiply functions

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };
// =====================================
// END: math-app/math.js
// =====================================


// =====================================
// START: math-app/app.js
// =====================================
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
// =====================================
// END: math-app/app.js
// =====================================


// =====================================
// START: npm-beginner/app.js
// =====================================
// Exercise 6 - app.js
// using the chalk package to print colored text
// Note: make sure to install chalk v4 (npm install chalk@4) since v5 is ESM only

const chalk = require("chalk");

// basic colors
console.log(chalk.green("Everything is working fine!"));
console.log(chalk.red("Something went wrong."));
console.log(chalk.blue("This is an info message."));
console.log(chalk.yellow("Warning: check your inputs!"));

// bold and underline styling
console.log(chalk.bold("This text is bold."));
console.log(chalk.underline("This text is underlined."));

// combining styles
console.log(chalk.bgBlue.white("White text on a blue background"));
console.log(chalk.bold.green("Bold and green - success!"));
// =====================================
// END: npm-beginner/app.js
// =====================================


// =====================================
// START: todo-app/todo.js
// =====================================
// Exercise 4 - todo.js
// TodoList class using ES6 module syntax

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    // add a new task to the list
    addTask(taskName) {
        const task = { name: taskName, completed: false };
        this.tasks.push(task);
        console.log(`Added task: "${taskName}"`);
    }

    // mark a task as done
    markComplete(taskName) {
        const task = this.tasks.find(t => t.name === taskName);
        if (task) {
            task.completed = true;
            console.log(`Marked as complete: "${taskName}"`);
        } else {
            console.log(`Task not found: "${taskName}"`);
        }
    }

    // print all tasks
    listTasks() {
        console.log("\nAll tasks:");
        if (this.tasks.length === 0) {
            console.log("No tasks yet.");
            return;
        }
        this.tasks.forEach((task, i) => {
            const status = task.completed ? "Done" : "Pending";
            console.log(`${i + 1}. ${task.name} - ${status}`);
        });
    }
}
// =====================================
// END: todo-app/todo.js
// =====================================


// =====================================
// START: todo-app/app.js
// =====================================
// Exercise 4 - app.js
// importing and using the TodoList class

import { TodoList } from "./todo.js";

const myList = new TodoList();

// adding some tasks
myList.addTask("Buy groceries");
myList.addTask("Do homework");
myList.addTask("Go for a run");
myList.addTask("Read a book");

// marking a couple as complete
myList.markComplete("Buy groceries");
myList.markComplete("Go for a run");

// list everything to see the current state
myList.listTasks();
// =====================================
// END: todo-app/app.js
// =====================================
