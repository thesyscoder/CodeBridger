/**
 * Reverses the elements of an input array.
 * @param {Array} arr - The input array to be reversed.
 * @returns {Array} - A new array containing the reversed elements of the input array.
 * @description This function takes an array as input and returns a new array containing the elements of the input array in reverse order.
 * It iterates through the input array in reverse order, pushing each element into a new array, and finally returns the new array with the reversed elements.
 * The time complexity of this function is O(n), where n is the number of elements in the input array.
 * @author - thesyscoder
 */
function reverseArray(arr) {
  // Create a new empty array to store the reversed values
  let reversedArr = [];

  // Traverse the input array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    // Add each element from the end of the original array to the new array
    reversedArr.push(arr[i]); // Push adds at the end of the array
  }

  return reversedArr;
}

// test the function
console.log(reverseArray([12, 4, 1, 456, 2])); // [2, 456, 1, 4, 12]
