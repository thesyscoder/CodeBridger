/**
 * Count the number of odd numbers in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number|string} The count of odd numbers or "Empty" if the array is empty.
 * @description This function counts the number of odd numbers in an array.
 * @example
 * // returns 3
 * countOddNumbers([1, 2, 3, 4, 5]);
 * @file count_odd_numbers.js
 * @author thesyscoder
 */

function countOddNumbers(arr) {
  if (arr.length === 0) return "Empty";

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
      count++;
    }
  }
  return count;
}

// Test cases
console.log(countOddNumbers([1, 3, 5, 7, 9])); // Output: 5
console.log(countOddNumbers([2, 4, 6, 8, 10])); // Output: 0
console.log(countOddNumbers([1, 2, 3, 4, 5])); // Output: 3
console.log(countOddNumbers([-3, -5, -7, -9])); // Output: 4
console.log(countOddNumbers([0])); // Output: 0
console.log(countOddNumbers([])); // Output: "Empty"
