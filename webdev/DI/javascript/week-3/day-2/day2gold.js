// Excersise 1
const printFUllName = ({first, last}) => {
    console.log(`${first} ${last}`);
}
printFUllName({first: 'Elie', last:'Schoppik'});
// Output: Elie Schoppik

// Excersise 2
let details = {
    name: "Natanel Karp",   
    age: 19,
    born: 2006
}
const printDetails = () => {
    console.log(Object.keys(details).sort((a, b) => a - b));
    console.log(Object.values(details).sort((a, b) => a - b));
}
printDetails();
// Output: [ 'age', 'born', 'name' ]
//         [ 19, 2006, 'Natanel Karp' ]
// Excersise 3
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();
console.log(counterOne.count);
// Output: 3
