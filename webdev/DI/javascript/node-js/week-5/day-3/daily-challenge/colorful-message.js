const chalk = require("chalk")

function showColorfulMessage() {
    console.log(chalk.blue("Hello from colorful-message.js!"))
    console.log(chalk.green("Node.js modules are working great!"))
    console.log(chalk.red.bold("This is a red bold message!"))
}

module.exports = showColorfulMessage
