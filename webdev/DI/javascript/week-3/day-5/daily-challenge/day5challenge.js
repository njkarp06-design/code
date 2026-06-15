let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    })
}

const cloneGroceries = () => {
    let user = client
    client = "Betty"
    console.log("client:", client)
    console.log("user:", user)
    // user is still "John" because strings are passed by value, so user got a copy of the original string

    let shopping = groceries
    shopping.totalPrice = "35$"
    console.log("groceries totalPrice:", groceries.totalPrice)
    // groceries.totalPrice is also "35$" because objects are passed by reference, so shopping and groceries point to the same object

    shopping.other.paid = false
    console.log("groceries paid:", groceries.other.paid)
    // groceries.other.paid is also false, same reason - same reference
}

displayGroceries()
cloneGroceries()
