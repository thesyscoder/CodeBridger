// Hello JavaScript message showing

// alert("Welcome to JavaScript")
console.log("Welcome to JavaScript");

// Variable: Variable is a memory to store the value.
let js = "Awesome";
console.log(js);

let name = "James";
console.log(name);

// practice variable and values
let country = "India";
let capital = "Delhi";

// log the values in console
console.log(country);
console.log(capital);

// Datatypes in JavaScript
/*
 1. Number: Floating point numbers
 2. Boolean: true/false values
 3. String: Sequence of characters
 4. Undefined: Value taken by a variable that is not yet defined.
 5. Null: Also means empty value
 6. Symbols:
 7. BigInt: larger than int 
 */

// number value
const bikeCount = 10;
console.log(bikeCount);

// boolean value
let isFull = true;
console.log(isFull);
console.log(typeof isFull);

const myName = "James";
console.log(myName);

// dynamic typing
isFull = false;
console.log(isFull);

let year;
console.log(year);

// Basic Operators
/*
    1. Mathematical Operator
*/

// mathematical operator

let countAge;
const DOB = 1994;
const currentYear = 2023;
countAge = currentYear - DOB;
console.log(`My age is ${countAge}`);

const nextYearAge = countAge + 1;
console.log(nextYearAge);

const multiplyAge = countAge * 2;
console.log(multiplyAge);

const firstName = "James";
const lastName = "Jonas";

console.log(firstName + " " + lastName);

// math operators
let x = 10;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

// comparison operators
const value = 120;
console.log(value > 100);
console.log(value < 100);
console.log(value <= 120);

// String and templates

const fName = "Jonas";
const job = "Programer";
const jonasDOB = 1994;

const jonas =
  "I'am " + fName + ", a " + (currentYear - jonasDOB) + " Years old " + job;
console.log(jonas);

const jonasInfo = `I'am ${fName}, a ${currentYear - jonasDOB} Years old ${job}`;
console.log(jonasInfo);

// if/else statements

const age = 19;
const isOld = age >= 18;

if (isOld) {
  console.log(`Person is eligible for driving license`);
} else {
  console.log("Not eligible for driving license");
}

if (isOld) console.log("Another way to use if");

// Type Conversion
const inputYear = "1994";
console.log(typeof inputYear);
const newYear = Number(inputYear);
console.log(typeof newYear);

// Equality Operator

const favorite = 47;
console.log(typeof favorite);

if (favorite === 45) {
  console.log("Awesome, this my favorite number");
} else {
  console.log("Check with other number");
}

// Logical operator

const username = "coder";
const password = "javascript2";

if (username === "coder" && password === "javascript") {
  console.log("Welcome to coding world");
} else {
  console.log("Invalid username or password");
}

const adult = 18;
const hasCar = false;

if (adult >= 18 && hasCar === true) {
  console.log("John can enjoy his ride");
} else if (age >= 18 || hasCar === true) {
  console.log("Also enjoy ride");
} else {
  console.log("Need to wait");
}

// Ternary Operator

const current_age = 17;

current_age >= 18
  ? console.log("ELigible for driving ")
  : console.log("Not eligible for driving ");
