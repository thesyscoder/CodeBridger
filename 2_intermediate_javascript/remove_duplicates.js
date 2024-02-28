/**
 * Remove duplicate elements from an array.
 * @param {any[]} arr - The input array.
 * @returns {any[]} New array with duplicates removed.
 * @description This function removes duplicate elements from the input array.
 * @example
 * // Example usage:
 * const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueArray = removeDuplicates(arrayWithDuplicates);
 * console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
 * @file remove_duplicates.js
 * @author thesyscoder
 */

function removeDuplicates(array) {
  if (arr.length === 0) return "Empty array!";
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;

    // Check if the current element already exists in uniqueArray
    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    // If it's not a duplicate, add it to uniqueArray
    if (!isDuplicate) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

// Example usage:
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
