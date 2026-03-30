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
