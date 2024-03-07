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

export default calculateFactorial;
