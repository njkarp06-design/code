// day1normal.js
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people[3] = "Jason";
console.log(people);
people.push("Natanel");
console.log(people);
people.indexOf("Mary");
console.log(people);
people.slice(1,4);
console.log(people);
people.indexOf("Foo");
// returns -1 because Foo is not an element in the array.
last="x";
array1= ["Greg", "Mary", "Devon", "Jason", "Natanel","x"];
console.log(array1);
array1.length;
array1.indexOf("x");
// the length of the array and the index of its last element are the same because the index starts at 0 and the length starts at 1.
for (let person in people) {
    console.log(people[person]);
}
for (let person in people) {
    console.log(people[person]);
    if (people[person] === "Devon") {
        break;
    }
}
colors=[ ,"red", "green", "blue", "yellow", "orange"];
for (let color in colors) {
    console.log("my #"+colors.indexOf(colors[color])+" is "+colors[color]);
}
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    console.log(building.numberOfRoomsAndRent.dan[1] + 200);
}
let family = {
    dad : "philip",
    mum : "Juliet",
    brother : "matti"
}
for (let membertype in family) {
    console.log(membertype);
}
for (let membertype in family) {
    console.log(family[membertype]);
}
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
for (let key in details) {
    console.log(key + " " + details[key]);
}
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const societyname=names.map(name => name[0]).sort().join("");
console.log(societyname);


// day1gold.js
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


// day1ninja.js
// Excersise 1
let Leo = {
    FullName : "Leonardo",
    Mass : 72,
    Height : 1.70,
    LBMI : function () {
      return this.Mass / (this.Height**2);
     }
  }
let y = Leo.LBMI()
console.log("Leo's BMI is:" + y)
let Nush = {
  FullName : "Natanel",
  Mass : 65,
  Height : 1.75,
  NBMI : function() {
  return this.Mass / (this.Height**2);
}
}
let x = Nush.NBMI()
console.log("Natanel's BMI is:" + x)
function compare() {
  if (x > y) {
  console.log("Natanel is a fatty");
  }
  else {console.log("Natanel is pretty fit at the moment! (well compared to Leo)")};
}
compare()
// Excersise 2
let gradesList = [75, 78, 90, 42, 35, 97, 67, 50, 10]
const findAvg = (gradesList) => {
let avg = 0;
for (let i = 0; i < gradesList.length; i++) {
avg += gradesList[i] / (gradesList.length)};
console.log("This is your average grade:" + avg)
if (avg>65) {
  console.log("YOU PASSED!");
}
  else {
    console.log("YOU FAILED! Please repeat the course")
}
}
findAvg(gradesList)
