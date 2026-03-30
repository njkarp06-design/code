// Excersise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Excersise 2
function displayStudentInfo(objUser) {
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}
displayStudentInfo({first: 'Elie', last:'Schoppik'});
// Output: Your full name is Elie Schoppik

// Excersise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const entries = Object.entries(users);
console.log(entries);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Excersise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// Output: object

// Excersise 5
class Dog {
  constructor(name) {
    this.name = name;
  }
}
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
const labrador = new Labrador('Buddy', 'Large');
console.log(labrador);
// Output: Labrador { name: 'Buddy', size: 'Large' }




