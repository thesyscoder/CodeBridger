/**
 * Finds the maximum number from an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The maximum number from the array.
 * @description This function finds the maximum number from an array of numbers.
 *              It iterates through the array and compares each element to find the maximum.
 * @syntax findMaxNumber(arr)
 * @file find_max_number.js
 * @author thesyscoder
 */

function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

export default findMaxNumber;
