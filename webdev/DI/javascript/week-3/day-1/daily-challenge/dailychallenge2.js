// one loop
let stars = "";
for (let i = 0; i < 6; i++) {
    stars += "* ";
    console.log(stars);
}

// nested for loops
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}
