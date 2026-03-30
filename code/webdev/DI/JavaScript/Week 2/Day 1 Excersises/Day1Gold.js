let numbers = [123, 8409, 100053, 333333333, 7]
for (let number in numbers) {
    if (numbers[number] % 3 === 0) {console.log(true)}
    else {console.log(false)}
}

let age = [20,5,12,43,98,55];
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("Sum:", sum); 
let max = age[0]; // start with first element
for (let i = 1; i < age.length; i++) {
  if (age[i] > max) {
    max = age[i];
  }
}
console.log("Highest age:", max);