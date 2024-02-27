/**
 * Checks if a number is positive, negative, or zero.
 * @param {number} num - The number to be checked.
 * @returns {void} Prints "Positive", "Negative", or "Zero" based on the input number.
 * @description JavaScript Basics - Control Flow
 * @syntax checkNumberPositivity(num)
 * @file check_number_positivity.js
 * @author thesyscoder
 */

function checkNumberPositivity(num) {
  if (num > 0) {
    console.log(`${num} is Positive`);
  } else if (num < 0) {
    console.log(`${num} is Negative`);
  } else {
    console.log(`${num} is Zero`);
  }
}

// Testing with valid inputs
console.log("Test 1:");
checkNumberPositivity(5);
console.log("\nTest 2:");
checkNumberPositivity(-3);
console.log("\nTest 3:");
checkNumberPositivity(0);
