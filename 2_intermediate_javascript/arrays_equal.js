/**
 * Check if two arrays are equal.
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @returns {boolean} True if arrays are equal, false otherwise.
 * @description This function checks if two arrays are equal.
 * @example
 * // returns true
 * arraysEqual([1, 2, 3], [1, 2, 3]);
 * @file arrays_equal.js
 * @author thesyscoder
 */

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log("Test case1");
const arrA = [12, 34, 56];
const arrB = [12, 34, 56];
console.log(arraysEqual(arrA, arrB)); // true

console.log("Test case2");
const arrX = [12, 32, 26];
const arrY = [12, 34, 56];
console.log(arraysEqual(arrX, arrY)); // false
