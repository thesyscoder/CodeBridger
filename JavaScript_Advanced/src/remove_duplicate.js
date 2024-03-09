/**
 * Finds duplicate element from array and remove.
 * @param {number[]} arr - The input array.
 * @returns {number} Find the duplicate element and remove.
 * @description This function will find the duplicate element from array and remove.
 * @syntax removeDuplicate(arr)
 * @file remove_duplicate.js
 * @author thesyscoder
 */

function removeDuplicate(arr) {
  let duplicate = arr[0];
  if (arr.length === 0) {
    return "Empty";
  }
  let uniqueArray = [...new Set(arr)];
  return uniqueArray;
}

export default removeDuplicate;
