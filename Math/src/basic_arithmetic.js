/**!SECTION
 * This script performs basic arithmetic operations including addition, subtraction, multiplication, division, and modulus.
 * @param {number} x - The first input number
 * @param {number} y - The second input number
 * @returns {number} The result of the arithmetic operation
 * @syntax addition(x, y), subtraction(x, y), multiplication(x, y), division(x, y), modulus(x, y)
 * @file basic_arithmetic.js
 * @author thesyscoder
 */

/**
 * Performs addition of two numbers.
 * @param {number} x - The first number
 * @param {number} y - The second number
 * @returns {number} The sum of x and y
 */
function addition(x, y) {
  return x + y;
}

/**
 * Performs subtraction of two numbers.
 * @param {number} x - The first number
 * @param {number} y - The second number
 * @returns {number} The difference of x and y
 */
function subtraction(x, y) {
  return x - y;
}

/**
 * Performs multiplication of two numbers.
 * @param {number} x - The first number
 * @param {number} y - The second number
 * @returns {number} The product of x and y
 */
function multiplication(x, y) {
  return x * y;
}

/**
 * Performs division of two numbers.
 * @param {number} x - The dividend
 * @param {number} y - The divisor (must be non-zero)
 * @returns {number} The result of x divided by y
 */
function division(x, y) {
  return x / y;
}

/**
 * Calculates the modulus of two numbers.
 * @param {number} x - The dividend
 * @param {number} y - The divisor (must be non-zero)
 * @returns {number} The remainder when x is divided by y
 * @author thesyscoder
 */
function modulus(x, y) {
  return x % y;
}

export default { addition, subtraction, multiplication, division, modulus };
