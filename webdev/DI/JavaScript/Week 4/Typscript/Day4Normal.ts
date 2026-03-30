// Excersise 1
class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

const emp = new Employee("Alice", 75000, "Software Engineer", "Engineering");
console.log(emp.getEmployeeInfo()); 

// Excersise 2
class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(): string {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}


const product = new Product(101, "Laptop", 999.99);
console.log(product.getProductInfo()); 
console.log(product.id);               


product.name = "Gaming Laptop";
product.price = 1299.99;
console.log(product.getProductInfo()); 

// Excersise 3
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): string {
    return `${this.name} makes a generic animal sound.`;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); 
  }

  public override makeSound(): string {
    return `${this.name} says: Bark! 🐶`;
  }
}

const genericAnimal = new Animal("Unknown Animal");
console.log(genericAnimal.makeSound()); 

const dog = new Dog("Rex");
console.log(dog.makeSound()); 
console.log(dog.name);    

// Excersise 4
class Calculator {
  static readonly appName: string = "TS Calculator";
  private static operationCount: number = 0;

  public static add(a: number, b: number): number {
    Calculator.operationCount++;
    return a + b;
  }

  public static subtract(a: number, b: number): number {
    Calculator.operationCount++;
    return a - b;
  }

  public static getOperationCount(): number {
    return Calculator.operationCount;
  }
}


console.log(Calculator.appName);             
console.log(Calculator.add(10, 5));          
console.log(Calculator.subtract(10, 5));     
console.log(Calculator.getOperationCount()); 

// Excersise 5
interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: "bronze" | "silver" | "gold"; // optional
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID:    ${user.id}`);
  console.log(`Name:  ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Membership: ${user.membershipLevel ?? "No membership level set"}`);
  console.log("-------------------");
}

const premiumUser: PremiumUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "gold",
};

const basicPremiumUser: PremiumUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

printUserDetails(premiumUser);
printUserDetails(basicPremiumUser);
