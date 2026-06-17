// Exercise 1
const displayNumberDivisible = () => {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`The sum of the numbers that are divisible by 23 is: ${sum}`);
}   
displayNumberDivisible();
// Exercise 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
shoppingList = ["banana", "orange", "apple"];

const myBill = () => {
    let total = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        if (stock[shoppingList[i]] > 0) {
            total += prices[shoppingList[i]];
            stock[shoppingList[i]] -= 1;
        }
    }
    console.log(total);
}
myBill();
// Exercise 3
const changeEnough = (itemPrice, amountOfChange) => {
  const coinvalues = [0.25, 0.1, 0.05, 0.01];
   let totalchange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {totalchange += amountOfChange[i] * coinvalues[i];}
    if (totalchange >= itemPrice) {
        console.log(true);}
        if (totalchange < itemPrice) {
            console.log(false);
        }
    }
    changeEnough(4.25, [25,20,5,0])
    changeEnough(14.11, [2,100,0,0])
    //Excersise 4
const hotelCost = () => {
    let nights = prompt("How many nights?");
    while (nights === "" || isNaN(nights) || nights === null) {
        nights = prompt("How many nights?");
    }
    return nights * 140;
}
const planeRideCost = () => {
    let destination = prompt("Where are you going?");
    while (destination === "" || destination === null || !isNaN(destination)) {
        destination = prompt("Where are you going?");
    }
    if (destination === "London") {return 183;}
    else if (destination === "Paris") {return 220;}
    else {return 300;}
}
const rentalCarCost = () => {
    let days = prompt("How many days do you want the car?");
    while (days === "" || isNaN(days) || days === null) {
        days = prompt("How many days do you want the car?");
    }
    let cost = days * 40;
    if (days > 10) {cost = cost - (cost * 0.05);}
    return cost;
}
const totalVacationCost = () => {
    const car = rentalCarCost();
    const hotel = hotelCost();
    const plane = planeRideCost();
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
    return car + hotel + plane;
}
console.log(totalVacationCost());

