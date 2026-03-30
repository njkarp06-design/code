// Excersise 1
let array = ["*", "**", "***", "****", "*****", "******"]
const pattern = () => {
    for (let i = 0; i < 6; i++)
        console.log(array[i])
};
pattern()
// Excersise 2
let array2 = ["*", "**", "***", "****", "*****", "******"]
const pattern2 = () => {
for (let i = 0; i < 1; i++) {
    console.log(array2[i])
    for (let i = 1; i < 6; i++) {
        console.log(array2[i])
    }
}
}
pattern2()