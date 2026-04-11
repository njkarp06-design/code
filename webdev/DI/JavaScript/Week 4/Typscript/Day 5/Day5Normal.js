var personWithAddress = {
    name: "Alice",
    age: 30,
    street: "123 Main St",
    city: "Springfield",
};
console.log(personWithAddress);
// Excersise 2
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    else {
        return "This is a string";
    }
}
console.log(describeValue(42));
console.log(describeValue("hello"));
// Excersise 3
var someValue = "Hello, TypeScript!";
var strValue = someValue;
console.log(strValue.toUpperCase());
console.log(strValue.length);
// Excersise 4
function getFirstElement(arr) {
    return arr[0];
}
// Test with arrays of mixed types
console.log(getFirstElement(["hello", 42, "world"]));
console.log(getFirstElement([99, "TypeScript", 1]));
console.log(getFirstElement(["TypeScript", 99, 1]));
// Excersise 5
function logLength(value) {
    console.log(value.length);
}
// Test with different types
logLength("Hello, TypeScript!");
logLength([1, 2, 3, 4, 5]);
logLength([1, "two", true]);
function isManager(employee) {
    return employee.position === "Manager";
}
function isDeveloper(employee) {
    return employee.position === "Developer";
}
function describeEmployee(employee) {
    if (isManager(employee)) {
        return "".concat(employee.name, " is a Manager in the ").concat(employee.department, " department.");
    }
    else if (isDeveloper(employee)) {
        return "".concat(employee.name, " is a Developer in the ").concat(employee.department, " department.");
    }
    return "".concat(employee.name, " has an unknown position.");
}
// Test with different employees
var manager = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "Engineering",
};
var developer = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "Engineering",
};
console.log(describeEmployee(manager));
console.log(describeEmployee(developer));
// Exercise 7
function formatInput(value) {
    var strValue = value;
    return "Formatted: ".concat(strValue.toString());
}
// Test with different types
console.log(formatInput(42));
console.log(formatInput("hello"));
console.log(formatInput([1, 2, 3]));
console.log(formatInput(true));
