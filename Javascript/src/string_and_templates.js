/**
 * Demonstrating String and Template Literals in JavaScript.
 */

// Define variables for demonstration
const fName = "Jonas";
const job = "Programmer";
const jonasDOB = 1994;

// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Concatenate strings using traditional concatenation
const jonas =
  "I'am " + fName + ", a " + (currentYear - jonasDOB) + " Years old " + job;
console.log(jonas);

// Concatenate strings using template literals
const jonasInfo = `I'am ${fName}, a ${currentYear - jonasDOB} Years old ${job}`;
console.log(jonasInfo);
