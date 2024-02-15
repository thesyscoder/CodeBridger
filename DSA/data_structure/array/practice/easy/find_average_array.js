/**
 * Calculates the sum and average of elements in the given array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {Object} - An object containing two properties: 'sum' for the sum of elements and 'avg' for the average of elements in the array.
 * @description This function calculates the sum and average of elements in the input array.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1) - The space used is constant regardless of the size of the input array.
 */
function findAverage(arr) {
  let sum = 0;
  let avg = 0;

  if (arr.length === 0) {
    return undefined; // or handle the empty array case based on your requirements
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  avg = sum / arr.length;

  return { sum, avg };
}

// Example usage:
const inputArr = [23, 45, 6, 71, 34, 1];
console.log(`Given array : ${inputArr}`);
const result = findAverage(inputArr);
console.log("Average :", result.avg);
