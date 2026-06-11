// Exercise 1 - shop.js
// importing the products array from products.js

const products = require("./products");

// function to find a product by name
function findProduct(productName) {
    const found = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (found) {
        console.log(`Product: ${found.name}`);
        console.log(`Price: $${found.price}`);
        console.log(`Category: ${found.category}`);
        console.log("---");
    } else {
        console.log(`"${productName}" was not found in the store.`);
        console.log("---");
    }
}

// testing the function with a few product names
findProduct("Apple");
findProduct("Laptop");
findProduct("Notebook");
findProduct("TV"); // this one doesnt exist
