/**
 * Calculates the sum of all elements in the given array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The sum of all elements in the array.
 * @description This function iterates through each element in the array and accumulates their sum.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1) - The space used is constant regardless of the size of the input array.
 * @author - thesyscoder
 */
function sum_array_elements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage:
const inputArr = [23, 45, 6, 71, 34, 1];
console.log(`Given array : ${inputArr}`);
console.log(`Sum of array elements: ${sum_array_elements(inputArr)}`);
