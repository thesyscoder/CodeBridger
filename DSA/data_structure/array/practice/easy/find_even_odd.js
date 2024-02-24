/**
 * Separates the elements of the given array into even and odd numbers.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {Object} - An object containing two arrays: 'even' for even numbers and 'odd' for odd numbers.
 * @description This function separates the elements of the input array into two arrays: 'even' for even numbers and 'odd' for odd numbers.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(n) - Additional space is required to store the even and odd numbers in separate arrays.
 */
function findEvenOdd(arr) {
  let even = [];
  let odd = [];

  if (arr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return { even, odd };
}

// Example usage:
const inputArr = [23, 45, 6, 71, 34, 1];
console.log(`Given array : ${inputArr}`);
const result = findEvenOdd(inputArr);
console.log("Even numbers:", result.even);
console.log("Odd numbers:", result.odd);
