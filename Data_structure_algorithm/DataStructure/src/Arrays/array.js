/**!SECTION
 * Perform various operations on an array in JavaScript.
 * @param {number[]} arr - The array on which operations are performed.
 * @returns {Object} An object containing information about the array operations.
 * @syntax - arrayOperations(arr)
 * @file - array.js
 * @author thesyscoder
 */

function arrayOperations(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return "Empty";
  }

  // Get the length of the array
  let arrayLength = arr.length;

  // Get the first element of the array
  let firstIndexElement = arr[0];

  // Change the value of the first element
  arr[0] = 12;

  // Add an element to the end of the array
  arr.push(145);

  // Remove and return the first element of the array
  let shiftElement = arr.shift();

  // Remove and return the last element of the array
  arr.pop();

  // Get a shallow copy of a portion of the array into a new array
  let slicedArray = arr.slice(0, 1);

  // Return an object containing information about the array operations
  return {
    array: arr,
    arrayLength: arrayLength,
    firstIndexElement: firstIndexElement,
    shiftedElement: shiftElement,
    slicedArray: slicedArray,
  };
}

export default arrayOperations;
