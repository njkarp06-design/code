const fs = require("fs")

function readFileContent() {
    const content = fs.readFileSync("./files/file-data.txt", "utf8")
    console.log(content)
}

module.exports = readFileContent
