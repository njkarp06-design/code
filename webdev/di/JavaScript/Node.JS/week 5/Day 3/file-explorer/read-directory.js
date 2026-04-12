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
