/**
 * Demonstrating Logical Operators in JavaScript.
 */

// Define variables representing username and password
const username = "coder";
const password = "javascript";

// Using logical AND operator to check both username and password
if (username === "coder" && password === "javascript") {
  console.log("Welcome to the coding world");
} else {
  console.log("Invalid username or password");
}

// Define variables representing age and car ownership
const adult = 18;
const hasCar = false;

// Using logical AND operator to check both age and car ownership
if (adult >= 18 && hasCar === true) {
  console.log("John can enjoy his ride");
}
// Using logical OR operator to check either age or car ownership
else if (age >= 18 || hasCar === true) {
  console.log("Also enjoy the ride");
}
// If neither condition is met, display a message indicating the need to wait
else {
  console.log("Need to wait");
}
