// Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[2] = "Jason";
people.push("Natanel");
console.log(people.indexOf("Mary"));
let copy = people.slice(1, 3);
console.log(copy);
console.log(people.indexOf("Foo"));
// returns -1 because Foo is not in the array
let last = people[people.length - 1];
console.log(last);

for (let person in people) {
    console.log(people[person]);
}
for (let person in people) {
    console.log(people[person]);
    if (people[person] === "Devon") {
        break;
    }
}

// Exercise 2
const colors = ["blue", "red", "green", "black", "purple"];
for (let i = 0; i < colors.length; i++) {
    console.log("My #" + (i + 1) + " choice is " + colors[i]);
}
let suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
}

// Exercise 3
let num = prompt("give me a number");
console.log(typeof num);
num = Number(num);
while (num < 10) {
    num = Number(prompt("give me a number that is 10 or bigger"));
}

// Exercise 4
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
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

// Exercise 5
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

// Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let sentence = "";
for (let key in details) {
    sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());

// Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const societyname = names.map(name => name[0]).sort().join("");
console.log(societyname);
