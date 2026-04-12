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
