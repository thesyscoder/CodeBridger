/**
 * JavaScript supports various data types.
 * 1. Number: Represents floating point numbers.
 * 2. Boolean: Represents true/false values.
 * 3. String: Represents a sequence of characters.
 * 4. Undefined: Represents a value taken by a variable that is not yet defined.
 * 5. Null: Represents an empty value.
 * 6. Symbols: Unique and immutable primitive values.
 * 7. BigInt: Represents integers larger than the maximum safe integer.
 */

// Define a constant to represent a number value
const bikeCount = 10;
console.log(bikeCount);

// Define a variable to represent a boolean value
let isFull = true;
console.log(isFull);
console.log(typeof isFull);

// Define a constant to represent a string value
const myName = "James";
console.log(myName);

// Dynamic typing: Changing the value of a variable
isFull = false;
console.log(isFull);

// Declare a variable without initializing it
let year;
console.log(year);
