/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to be checked.
 * @returns {void} Prints "Prime" if the number is prime, otherwise prints "Not Prime".
 * @description JavaScript Basics - Loops, Control Flow, Math
 * @syntax checkPrimeNumber(num)
 * @file check_prime_number.js
 * @author thesyscoder
 */

function checkPrimeNumber(num) {
  // Check if the number is less than 2, as prime numbers are greater than 1
  if (num < 2) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Test the function with example numbers
console.log("Test 1:");
const testNumber1 = 7;
if (checkPrimeNumber(testNumber1)) {
  console.log(testNumber1 + " is a prime number.");
} else {
  console.log(testNumber1 + " is not a prime number.");
}
console.log("\nTest 2:");
const testNumber2 = 10;
if (checkPrimeNumber(testNumber2)) {
  console.log(testNumber2 + " is a prime number.");
} else {
  console.log(testNumber2 + " is not a prime number.");
}
