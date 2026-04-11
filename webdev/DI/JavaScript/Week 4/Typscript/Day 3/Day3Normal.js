// Excersise 1
function greet(greeting) {
    return greeting;
}
console.log(greet("Hello, World!"));
// Excersise 2
var age = 19;
"";
var firstName = "Natanel Karp";
console.log("My name is ".concat(firstName, " and I am ").concat(age, " years old."));
// Excersise 3
var id;
id = 123;
console.log("My ID is ".concat(id, "."));
id = "ABC123";
console.log("My ID is ".concat(id, "."));
// Excersise 4
function Numberx(number1) {
    if (number1 > 0) {
        return "number1 is positive";
    }
    else if (number1 < 0) {
        return "number1 is negative";
    }
    else {
        return "number1 is zero";
    }
}
console.log(Numberx(5));
console.log(Numberx(-3));
console.log(Numberx(0));
// Excersise 5
function getDetails(name, age) {
    return [name, age, "Hello, ".concat(name, "! You are ").concat(age, " years old.")];
}
var details = getDetails("Alice", 25);
console.log(details); // ['Alice', 25, 'Hello, Alice! You are 25 years old.']
function createPerson(name, age) {
    return [name, age];
}
var person1 = createPerson("Bob", 30);
console.log(person1); // ['Bob', 30]
// Excersise 7
