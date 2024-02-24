/**
 * Reverses the elements of the given array.
 *
 * @param {any[]} arr - The input array.
 * @returns {any[]} - The reversed array.
 * @description This function reverses the order of elements in the input array.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(n) - Additional space is required to store the reversed array.
 */
function reverseArray(arr) {
  let revArr = [];
  if (arr.length === 0) {
    return undefined; // or handle the empty array case based on your requirements
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

// Example usage:
const inputArr = [23, 45, 6, 71, 34, 1];
console.log(`Given array : ${inputArr}`);
console.log(`Reverse Array: ${reverseArray(inputArr)}`);
