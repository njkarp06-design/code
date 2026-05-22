// Excersise 1
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Springfield",
};

console.log(personWithAddress);


// Excersise 2
function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

console.log(describeValue(42));       
console.log(describeValue("hello"));  

// Excersise 3
const someValue: any = "Hello, TypeScript!";

const strValue: string = someValue as string;

console.log(strValue.toUpperCase()); 
console.log(strValue.length);       

// Excersise 4
function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

// Test with arrays of mixed types
console.log(getFirstElement(["hello", 42, "world"])); 
console.log(getFirstElement([99, "TypeScript", 1]));  
console.log(getFirstElement(["TypeScript", 99, 1]));  

// Excersise 5
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

// Test with different types
logLength("Hello, TypeScript!"); 
logLength([1, 2, 3, 4, 5]);      
logLength([1, "two", true]);      

// Excersise 6
type Personx = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employeex = Personx & Job;

function isManager(employee: Employeex): employee is Employeex & { position: "Manager" } {
  return employee.position === "Manager";
}

function isDeveloper(employee: Employeex): employee is Employeex & { position: "Developer" } {
  return employee.position === "Developer";
}

function describeEmployee(employee: Employeex): string {
  if (isManager(employee)) {
    return `${employee.name} is a Manager in the ${employee.department} department.`;
  } else if (isDeveloper(employee)) {
    return `${employee.name} is a Developer in the ${employee.department} department.`;
  }
  return `${employee.name} has an unknown position.`;
}

// Test with different employees
const manager: Employeex  = {
  name: "Alice",
  age: 35,
  position: "Manager",
  department: "Engineering",
};

const developer: Employeex = {
  name: "Bob",
  age: 28,
  position: "Developer",
  department: "Engineering",
};

console.log(describeEmployee(manager));   
console.log(describeEmployee(developer)); 

// Exercise 7
function formatInput<T extends { toString(): string }>(value: T): string {
  const strValue = value as unknown as string;
  return `Formatted: ${strValue.toString()}`;
}

// Test with different types
console.log(formatInput(42));          
console.log(formatInput("hello"));      
console.log(formatInput([1, 2, 3]));    
console.log(formatInput(true));         