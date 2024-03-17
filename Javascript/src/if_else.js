/**
 * Demonstrating if/else statements in JavaScript.
 */

// Define a variable representing a person's age
const age = 19;
// Check if the person is considered old enough
const isOld = age >= 18;

// Using if/else statement to determine eligibility for driving license
if (isOld) {
  console.log(`Person is eligible for a driving license`);
} else {
  console.log("Not eligible for a driving license");
}

// Using if statement without curly braces (single-line if statement)
if (isOld) console.log("Another way to use if");
