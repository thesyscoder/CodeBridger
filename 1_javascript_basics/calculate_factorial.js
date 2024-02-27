/**
 * Calculates the factorial of a number.
 * @param {number} num - The number to calculate the factorial for.
 * @returns {number} The factorial of the given number.
 * @description This function calculates the factorial of a given number using a loop.
 * @syntax calculateFactorial(num)
 * @file calculate_factorial.js
 * @author thesyscoder
 */

function calculateFactorial(num) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log("Test case 1");
console.log(calculateFactorial(0)); // Output: 1
console.log("Test case 2");
console.log(calculateFactorial(1)); // Output: 1
console.log("Test case 3");
console.log(calculateFactorial(5)); // Output: 120
