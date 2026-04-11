var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Excersise 1
var Employee = /** @class */ (function () {
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position);
    };
    return Employee;
}());
var emp = new Employee("Alice", 75000, "Software Engineer", "Engineering");
console.log(emp.getEmployeeInfo());
// Excersise 2
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "Product: ".concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
var product = new Product(101, "Laptop", 999.99);
console.log(product.getProductInfo());
console.log(product.id);
product.name = "Gaming Laptop";
product.price = 1299.99;
console.log(product.getProductInfo());
// Excersise 3
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "".concat(this.name, " makes a generic animal sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        return "".concat(this.name, " says: Bark! \uD83D\uDC36");
    };
    return Dog;
}(Animal));
var genericAnimal = new Animal("Unknown Animal");
console.log(genericAnimal.makeSound());
var dog = new Dog("Rex");
console.log(dog.makeSound());
console.log(dog.name);
// Excersise 4
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        Calculator.operationCount++;
        return a + b;
    };
    Calculator.subtract = function (a, b) {
        Calculator.operationCount++;
        return a - b;
    };
    Calculator.getOperationCount = function () {
        return Calculator.operationCount;
    };
    Calculator.appName = "TS Calculator";
    Calculator.operationCount = 0;
    return Calculator;
}());
console.log(Calculator.appName);
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));
console.log(Calculator.getOperationCount());
function printUserDetails(user) {
    var _a;
    console.log("ID:    ".concat(user.id));
    console.log("Name:  ".concat(user.name));
    console.log("Email: ".concat(user.email));
    console.log("Membership: ".concat((_a = user.membershipLevel) !== null && _a !== void 0 ? _a : "No membership level set"));
    console.log("-------------------");
}
var premiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "gold",
};
var basicPremiumUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};
printUserDetails(premiumUser);
printUserDetails(basicPremiumUser);
