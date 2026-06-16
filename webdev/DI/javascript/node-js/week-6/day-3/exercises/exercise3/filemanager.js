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
