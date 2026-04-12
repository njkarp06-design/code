// Exercise 3 - app.js
// using the fileManager module to read and write files

const { readFile, writeFile } = require("./fileManager");

// reading content from Hello World.txt
readFile("./Hello World.txt");

// writing new content to Bye World.txt
writeFile("./Bye World.txt", "Writing to the file");

// reading Bye World.txt again to confirm the write worked
readFile("./Bye World.txt");
