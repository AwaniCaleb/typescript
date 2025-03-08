// Basic Types in TypeScript

// String
const name: string = "Awani Caleb";

// Number
const age: number = 25;
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;

// Boolean
const isDone: boolean = false;

// Array
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3]; // Generic array type

// Tuple
const tuple: [string, number] = ["hello", 10];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;
console.log(c); // 1

// Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null and Undefined
const u: undefined = undefined;
const n: null = null;

// Never
function error(message: string): never {
	throw new Error(message);
}

// Object
const obj: object = { key: "value" };

export { name, age, isDone, list1, tuple, c, notSure, obj };
