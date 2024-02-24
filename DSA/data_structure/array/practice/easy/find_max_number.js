/**
 * Finds the maximum element in the given array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The maximum element in the array.
 * @description This function iterates through each element in the array and returns the maximum element found.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1) - The space used is constant regardless of the size of the input array.
 */
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // or handle the empty array case based on your requirements
  }

  let max = arr[0]; // Initialize max with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Example usage:
const inputArr = [23, 45, 6, 71, 34, 1];
console.log(`Given array : ${inputArr}`);
console.log(`Max element in array: ${findMax(inputArr)}`);
