// Generics in TypeScript

// Generic function
function identity<T>(arg: T): T {
	return arg;
}

const output1 = identity<string>("myString");
const output2 = identity<number>(100);

// Generic interface
interface GenericIdentityFn<T> {
	(arg: T): T;
}

const myIdentity: GenericIdentityFn<number> = identity;

// Generic classes
class GenericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T) => T;

	constructor(zero: T, addFn: (x: T, y: T) => T) {
		this.zeroValue = zero;
		this.add = addFn;
	}
}

const stringNumeric = new GenericNumber<string>(
	"",
	(x: string, y: string) => x + y
);

const numericNumber = new GenericNumber<number>(
	0,
	(x: number, y: number) => x + y
);

// Generic constraints
interface Lengthwise {
	length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
	console.log(`Length: ${arg.length}`);
	return arg;
}

// Type parameters in generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

let x = { a: 1, b: 2, c: 3 };
const a = getProperty(x, "a");

export {
	identity,
	myIdentity,
	stringNumeric,
	numericNumber,
	loggingIdentity,
	getProperty,
};
