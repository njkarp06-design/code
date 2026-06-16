// exercise1/products.js
// Exercise 1 - products.js

const products = [
    { name: "Apple", price: 1.5, category: "Fruit" },
    { name: "Laptop", price: 999.99, category: "Electronics" },
    { name: "Notebook", price: 3.25, category: "Stationery" },
    { name: "Banana", price: 0.75, category: "Fruit" },
    { name: "Headphones", price: 59.99, category: "Electronics" },
];

module.exports = products;


// exercise1/shop.js
// Exercise 1 - shop.js

const products = require("./products");

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

findProduct("Apple");
findProduct("Laptop");
findProduct("Notebook");
findProduct("TV"); // this one doesnt exist


// exercise2/data.js
// Exercise 2 - data.js

const people = [
    { name: "Alice", age: 24, location: "New York" },
    { name: "Bob", age: 31, location: "London" },
    { name: "Carlos", age: 19, location: "Madrid" },
    { name: "Diana", age: 27, location: "Toronto" },
    { name: "Ethan", age: 35, location: "Sydney" },
];

module.exports = people;


// exercise2/app.js
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


// exercise3/filemanager.js
// Exercise 3 - fileManager.js

const fs = require("fs");

function readFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, "utf-8");
        console.log(`Reading from "${filePath}":`);
        console.log(content);
    } catch (err) {
        console.log("Could not read file:", err.message);
    }
}

function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`Successfully wrote to "${filePath}"`);
    } catch (err) {
        console.log("Could not write to file:", err.message);
    }
}

module.exports = { readFile, writeFile };


// exercise3/app.js
// Exercise 3 - app.js

const { readFile, writeFile } = require("./filemanager");

readFile("./hello-world.txt");

writeFile("./bye-world.txt", "Writing to the file");

readFile("./bye-world.txt");


// file-explorer/read-directory.js
// Exercise 7 - read-directory.js

const fs = require("fs");
const path = require("path");

const dir = "./";

const files = fs.readdirSync(dir);

console.log(`Files in "${path.resolve(dir)}":`);
files.forEach(file => {
    console.log(" -", file);
});


// file-explorer/copy-file.js
// Exercise 7 - copy-file.js

const fs = require("fs");

const sourceFile = "./source.txt";
const destFile = "./destination.txt";

const content = fs.readFileSync(sourceFile, "utf-8");
console.log("Read from source.txt:");
console.log(content);

fs.writeFileSync(destFile, content, "utf-8");
console.log("Copied content to destination.txt successfully.");


// math-app/math.js
// Exercise 5 - math.js

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };


// math-app/app.js
// Exercise 5 - app.js

const _ = require("lodash");
const math = require("./math");

const sum = math.add(15, 27);
const product = math.multiply(6, 9);

console.log(`15 + 27 = ${sum}`);
console.log(`6 x 9 = ${product}`);

const numbers = [4, 8, 15, 16, 23, 42];

const largest = _.max(numbers);
const smallest = _.min(numbers);
const rounded = _.map(numbers, n => _.round(n / 3, 2));

console.log(`\nNumbers: ${numbers}`);
console.log(`Largest: ${largest}`);
console.log(`Smallest: ${smallest}`);
console.log(`Each divided by 3 (rounded): ${rounded}`);


// npm-beginner/app.js
// Exercise 6 - app.js

const chalk = require("chalk");

console.log(chalk.green("Everything is working fine!"));
console.log(chalk.red("Something went wrong."));
console.log(chalk.blue("This is an info message."));
console.log(chalk.yellow("Warning: check your inputs!"));

console.log(chalk.bold("This text is bold."));
console.log(chalk.underline("This text is underlined."));

console.log(chalk.bgBlue.white("White text on a blue background"));
console.log(chalk.bold.green("Bold and green - success!"));


// todo-app/todo.js
// Exercise 4 - todo.js

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName) {
        const task = { name: taskName, completed: false };
        this.tasks.push(task);
        console.log(`Added task: "${taskName}"`);
    }

    markComplete(taskName) {
        const task = this.tasks.find(t => t.name === taskName);
        if (task) {
            task.completed = true;
            console.log(`Marked as complete: "${taskName}"`);
        } else {
            console.log(`Task not found: "${taskName}"`);
        }
    }

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

module.exports = { TodoList };


// todo-app/app.js
// Exercise 4 - app.js

const { TodoList } = require("./todo.js");

const myList = new TodoList();

myList.addTask("Buy groceries");
myList.addTask("Do homework");
myList.addTask("Go for a run");
myList.addTask("Read a book");

myList.markComplete("Buy groceries");
myList.markComplete("Go for a run");

myList.listTasks();
