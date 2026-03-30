// Excersise 1 : Favorite Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const order = () => {
    for (let i=0; i < colors.length; i++) {
        console.log((i + 1) + '# ' + 'choice is ' + colors[i])
    }
}
const checkColor = () => {
    if (colors.includes("Violet")) {
        console.log('Yeah, Violet is in the array');
    } else {
        console.log('No, Violet is not in the array');
    }
}
order()
checkColor()

// Excersise 2 

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
    const order2 = () => {   
for (let i = 0; i < color.length; i++) {
    if (i === 0) {
        console.log((i + 1) + ordinal[1] + ' choice is ' + color[i]);
    } else if (i === 1) {
        console.log((i + 1) + ordinal[2] + ' choice is ' + color[i]);
    } else if (i === 2) {
        console.log((i + 1) + ordinal[3] + ' choice is ' + color[i]);
    } else {
        console.log((i + 1) + ordinal[0] + ' choice is ' + color[i]);
    }
}
}
order2()

// Excersise 3: Analyzing Code

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Using the spread operator is used to combine the arrays so that the result becomes ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);
// Using the spread operator used to split the string into an array of characters so that the result comes out to be, ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Using the spread operator usedto create a new array with three empty parts so that the result comes out to be, [undefined, undefined, undefined]

// Excersise 4: Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const welcomeStudents = users.map (user => 
`Hello ${user.firstName}`
)
console.log(welcomeStudents)

// Excersise 5: Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicPhrase = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(epicPhrase)
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
const passedStudents = students.filter(student => student.isPassed === true);
console.log(passedStudents)
const congratulations = passedStudents.forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`))      
console.log(congratulations)




