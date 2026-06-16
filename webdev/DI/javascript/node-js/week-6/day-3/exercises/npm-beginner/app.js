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
