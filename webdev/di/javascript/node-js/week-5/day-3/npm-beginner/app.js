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
