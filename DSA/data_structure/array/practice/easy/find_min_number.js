/**
 * Finds the minimum element in the given array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The minimum element in the array.
 * @description This function iterates through each element in the array and returns the minimum element found.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1) - The space used is constant regardless of the size of the input array.
 */
function findMin(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Example usage:
const inputArr = [23, 45, 6, 71, 34, 1];
console.log(`Given array : ${inputArr}`);
console.log(`Min element in array: ${findMin(inputArr)}`);
