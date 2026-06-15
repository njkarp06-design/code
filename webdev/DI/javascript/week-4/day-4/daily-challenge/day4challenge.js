function isAnagram(str1, str2) {
    let a = str1.replace(/\s/g, "").toLowerCase().split("").sort().join("")
    let b = str2.replace(/\s/g, "").toLowerCase().split("").sort().join("")
    return a === b
}

console.log(isAnagram("Astronomer", "Moon starer"))
console.log(isAnagram("School master", "The classroom"))
console.log(isAnagram("The Morse Code", "Here come dots"))
console.log(isAnagram("hello", "world"))
