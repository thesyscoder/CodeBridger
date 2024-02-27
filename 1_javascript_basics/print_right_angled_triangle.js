/**
 * Prints a right-angled triangle pattern using '*'.
 * @param {number} n - The number of rows in the triangle.
 * @returns {void} Prints the right-angled triangle pattern.
 * @description JavaScript Basics - Loops, Patterns
 * @syntax printRightAngledTriangle(n)
 * @file print_right_angled_triangle.js
 * @author thesyscoder
 */

const printRightAngledTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
};

// Example usage:
console.log("Test case 1");
printRightAngledTriangle(10);
