/**
 * Basic Operators in JavaScript:
 * 1. Mathematical Operator
 */

// Define variables for demonstration
let countAge;
const DOB = 1994;

// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Calculate age using subtraction operator
countAge = currentYear - DOB;
console.log(`My age is ${countAge}`);

// Increment age for next year
const nextYearAge = countAge + 1;
console.log(nextYearAge);

// Multiply age by 2
const multiplyAge = countAge * 2;
console.log(multiplyAge);

// Concatenate strings using the addition operator
const firstName = "James";
const lastName = "Jonas";
console.log(firstName + " " + lastName);

// Math operators demonstration
let x = 10;
console.log(x);
x += 10; // Equivalent to x = x + 10
console.log(x);
x++; // Increment operator
console.log(x);
x--; // Decrement operator
console.log(x);

// Comparison operators demonstration
const value = 120;
console.log(value > 100); // Greater than
console.log(value < 100); // Less than
console.log(value <= 120); // Less than or equal to
