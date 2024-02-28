/**
 * Find the maximum and minimum elements in an array of integers.
 * @param {number[]} arr - The array of integers.
 * @returns {{ max: number, min: number }} Object containing max and min values.
 * @description This function finds the maximum and minimum elements in the array.
 * @example
 * // returns { max: 5, min: 1 }
 * findMaxAndMin([1, 3, 5, 2, 4]);
 * @file max_and_min_elements.js
 * @author thesyscoder
 */

function findMaxAndMin(arr) {
  if (arr.length === 0) return "Empty array!";

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

// Example usage:
console.log("Test case");
let arrayInput = [1, 3, 5, 2, 4];
let result = findMaxAndMin(arrayInput);
console.log(`Max : ${result.max}`);
console.log(`Min : ${result.min}`);
