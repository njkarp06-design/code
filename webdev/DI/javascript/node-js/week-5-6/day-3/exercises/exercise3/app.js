// Exercise 3 - app.js
// using the fileManager module to read and write files

const { readFile, writeFile } = require("./filemanager");

// reading content from Hello World.txt
readFile("./hello-world.txt");

// writing new content to bye-world.txt
writeFile("./bye-world.txt", "Writing to the file");

// reading bye-world.txt again to confirm the write worked
readFile("./bye-world.txt");
