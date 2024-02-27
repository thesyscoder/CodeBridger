/**
 * Calculates the area of a circle given its radius.
 * @param {number} radius - The radius of the circle.
 * @returns {number|string} The calculated area of the circle if the radius is non-negative,
 *                          otherwise returns an error message.
 * @description JavaScript Basics - Variables, Operators, Math
 * @syntax findCircleArea(radius)
 * @file find_circle_area.js
 * @author thesyscoder
 */

function findCircleArea(radius) {
  if (radius < 0) {
    return "Error! Radius cannot be negative.";
  }
  // Calculate area using Math.PI constant
  const area = Math.PI * radius ** 2; // Area formula: A = πr^2
  console.log(`Area of the circle is: ${area}`);
  return area; // Return the calculated area
}

// Testing with valid inputs
console.log("Test 1:");
console.log(findCircleArea(5)); // Expected output: "Area of the circle is: 78.54"
console.log("\nTest 2:");
console.log(findCircleArea(0)); // Expected output: "Area of the circle is: 0"
console.log("\nTest 3:");
console.log(findCircleArea(-1)); // Expected output: "Error! Radius cannot be negative."
