// Interfaces in TypeScript

// Basic interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

// Implementing an interface
const newUser: User = {
  id: 1,
  name: "Awani Caleb",
  email: "awani@example.com",
  createdAt: new Date(),
};

// Extending interfaces
interface Employee extends User {
  role: string;
  department: string;
  salary: number;
}

const employee: Employee = {
  id: 2,
  name: "John Doe",
  email: "john@example.com",
  role: "Developer",
  department: "Engineering",
  salary: 75000,
  createdAt: new Date(),
};

// Interface for a function type
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function (source, subString) {
  return source.search(subString) > -1;
};

// Interface for indexable types
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];

export { User, Employee, newUser, employee, mySearch, myArray };
