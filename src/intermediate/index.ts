import { newUser, employee, mySearch, myArray } from "./interfaces";

console.log("Intermediate TypeScript Examples:");
console.log("-------------------------------");
console.log("User:", newUser);
console.log("Employee:", employee);
console.log("Search function result:", mySearch("hello world", "world"));
console.log("String array:", myArray);

// Classes & inheritance example
console.log("\nClasses & Inheritance:");
console.log("--------------------");

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark() {
    console.log("Woof! Woof!");
  }

  move(distance: number = 5) {
    console.log("Running...");
    super.move(distance);
  }
}

const dog = new Dog("Rex");
dog.bark();
dog.move(10);
