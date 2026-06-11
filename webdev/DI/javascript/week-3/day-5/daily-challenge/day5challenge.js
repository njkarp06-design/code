function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        let allStrings = arr.every(word => typeof word === "string")
        if (allStrings) {
            resolve(arr.map(word => word.toUpperCase()))
        } else {
            reject("Not all items are strings")
        }
    })
}

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve(arr.sort())
        } else {
            reject("Array needs more than 4 words")
        }
    })
}

// catch runs - has a number
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

// catch runs - only 3 words
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

// resolves - 5 strings
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))
