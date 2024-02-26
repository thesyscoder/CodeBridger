/**
 * Calculates the area of a circle given its radius.
 * @param {number} r - The radius of the circle.
 * @returns {number} The calculated area of the circle.
 * @description JavaScript Basics - Variables, Operators, Math
 * @author thesyscoder
 */

const radius = 21;

console.log(`Given radius: ${radius}`);

// Calculate area using Math.PI constant
const area = Math.PI * Math.pow(radius, 2); // Area formula: A = πr^2
console.log(`Area of the circle is: ${area}`);
return area; // Return the calculated area
