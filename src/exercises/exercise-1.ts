/**
 * Exercise 1: Type Annotations and Interfaces
 * 
 * Instructions:
 * 1. Create a Person interface with the following properties:
 *    - id (number)
 *    - name (string)
 *    - age (number)
 *    - email (string, optional)
 *    - address (Address interface with street, city, state, zip)
 * 
 * 2. Create an array of 3 Person objects
 * 
 * 3. Create a function that takes a Person and returns a formatted string
 * 
 * 4. Create a function that filters people by minimum age
 */

// TODO: Define the Address interface
interface Address {
    // Add your code here
}

// TODO: Define the Person interface
interface Person {
    // Add your code here
}

// TODO: Create an array of Person objects
const people: Person[] = [
    // Add your objects here
];

// TODO: Create a function to format a person's details
function formatPerson(person: Person): string {
    // Add your code here
    return "";
}

// TODO: Create a function to filter people by minimum age
function filterByMinAge(people: Person[], minAge: number): Person[] {
    // Add your code here
    return [];
}

// TODO: Test your code here
function runExercise() {
    console.log("Exercise 1: Person Interface");
    // Add test code here
}

runExercise();