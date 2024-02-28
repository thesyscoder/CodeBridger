/**
 * Calculate the sum of all elements in an array of integers.
 * @param {number[]} arr - The array of integers.
 * @returns {number|string} The sum of all elements in the array if array is not empty, otherwise returns "Empty array!".
 * @description This function calculates the sum of all elements in the given array without using built-in array methods.
 * @example
 * // returns 10
 * sumOfElements([1, 2, 3, 4]);
 * @file sum_of_elements.js
 * @author thesyscoder
 */

function sumOfElements(arr) {
  if (arr.length === 0) return "Empty array!";

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage:
console.log("Test case 1");
console.log(sumOfElements([])); // Output: "Empty array!"
console.log("Test case 2");
console.log(sumOfElements([23, 45, 67, 14, 12])); // Output: 161
