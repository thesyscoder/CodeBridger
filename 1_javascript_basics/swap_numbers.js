/**
 * Swaps the values of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {void} Prints the swapped values of the two numbers.
 * @description JavaScript Basics - Variables, Functions, Scope
 * @syntax swapNumbers(a, b)
 * @file swap_numbers.js
 * @author thesyscoder
 */

function swapNumbers(a, b) {
  console.log(`Before swapping: a = ${a}, b = ${b}`);
  // Swapping the values of a and b
  let temp = a;
  a = b;
  b = temp;
  console.log(`After swapping: a = ${a}, b = ${b}`);
}

// Testing with valid inputs
console.log("Test 1:");
swapNumbers(5, 10); // Expected output: "Before swapping: a = 5, b = 10" and "After swapping: a = 10, b = 5"
console.log("\nTest 2:");
swapNumbers(34, 89); // Expected output: "Before swapping: a = 34, b = 89" and "After swapping: a = 89, b = 34"
console.log("\nTest 3:");
swapNumbers(4, 7); // Expected output: "Before swapping: a = 4, b = 7" and "After swapping: a = 7, b = 4"
