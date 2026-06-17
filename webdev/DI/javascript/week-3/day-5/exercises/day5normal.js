// Excersise 1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
funcOne()
// if let changed to const, it will return an error as const cannot be reasigned.

// #2 funcThree() shows 0, then funcTwo() sets a to 5 so funcThree() shows 5 the second time
// with const funcTwo cant reassign a so it errors

// #3 funcFour puts a on the window object so funcFive shows "hello"

// #4 funcSix has its own a = "test" so it shows "test". const works the same here

// #5 5 inside the if block, 2 outside, because let is block scoped. const is the same


// Exercise 2
const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


// Exercise 3
const isString = (value) => typeof value === "string";
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));


// Exercise 4
const sum = (a, b) => a + b;
console.log(sum(5, 7));


// Exercise 5
function toGrams(kg) {
    return kg * 1000;
}
console.log(toGrams(3));

const toGrams2 = function(kg) {
    return kg * 1000;
};
console.log(toGrams2(3));
// a function declaration is hoisted so you can use it before its written, a function expression is not

const toGrams3 = kg => kg * 1000;
console.log(toGrams3(3));


// Exercise 6
(function(children, partner, location, job) {
    document.body.innerHTML += `<p>You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.</p>`;
})(3, "Sarah", "Paris", "web developer");


// Exercise 7
(function(name) {
    const navbar = document.querySelector(".navbar");
    const div = document.createElement("div");
    div.innerHTML = `<p>${name}</p><img src="https://via.placeholder.com/50" alt="profile">`;
    navbar.appendChild(div);
})("John");


// Exercise 8
function makeJuice(size) {
    const ingredients = [];
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }
    function displayJuice() {
        document.body.innerHTML += `<p>The client wants a ${size} juice, containing ${ingredients.join(", ")}.</p>`;
    }
    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "kiwi", "lemon");
    displayJuice();
}
makeJuice("large");