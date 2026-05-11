// Excersise 1
function greet(greeting: string): string {
    return greeting
}
console.log(greet("Hello, World!"));

// Excersise 2
let age: number = 19;``
let firstName: string = "Natanel Karp";
console.log(`My name is ${firstName} and I am ${age} years old.`);

// Excersise 3
let id: (number | string);
id = 123;
console.log(`My ID is ${id}.`);
id = "ABC123";
console.log(`My ID is ${id}.`);

// Excersise 4
function Numberx (number1: number): string {
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
function getDetails(name: string, age: number): [string, number, string] {
    return [name, age, `Hello, ${name}! You are ${age} years old.`];
}

const details = getDetails("Alice", 25);
console.log(details); // ['Alice', 25, 'Hello, Alice! You are 25 years old.']
// Excersise 6
type person = [name:string, age:number];
function createPerson(name: string, age: number): person {
    return [name, age];
}
const person1 = createPerson("Bob", 30);
console.log(person1); // ['Bob', 30]

// Excersise 7
    
