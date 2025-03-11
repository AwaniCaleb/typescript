import {
    identity,
    stringNumeric,
    numericNumber,
    loggingIdentity,
    getProperty
} from './generics';

console.log("Advanced TypeScript Examples:");
console.log("----------------------------");

// Generic functions
console.log("Generic function results:");
console.log(`identity<string>("Hello"): ${identity<string>("Hello")}`);
console.log(`identity<number>(42): ${identity<number>(42)}`);

// Generic classes
console.log("\nGeneric class examples:");
console.log(`stringNumeric.add("Hello ", "World"): ${stringNumeric.add("Hello ", "World")}`);
console.log(`numericNumber.add(10, 20): ${numericNumber.add(10, 20)}`);

// Generic constraints
console.log("\nGeneric constraints:");
loggingIdentity("This string has length");
// Would error: loggingIdentity(3); // Number doesn't have length property

// Using keyof
console.log("\nKeyof example:");
let obj = { a: 1, b: 2, c: 3 };
console.log(`getProperty(obj, "a"): ${getProperty(obj, "a")}`);

// Advanced type example
console.log("\nAdvanced Types:");
console.log("---------------");

// Union types
type StringOrNumber = string | number;
function padLeft(value: string, padding: StringOrNumber) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(`padLeft("Hello", 4): "${padLeft("Hello", 4)}"`);
console.log(`padLeft("Hello", "---"): "${padLeft("Hello", "---")}"`);

// Intersection types
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

const response: ArtworksResponse = {
    artworks: [{ title: "Mona Lisa" }, { title: "The Starry Night" }],
    success: true
};

console.log("Intersection type example:", response);