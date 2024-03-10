/** !SECTION
 * Check O(1) time complexity
 * @param {number[]} arr - The input array.
 * @returns {string[]} - Returns the first, third, and last elements of the array.
 * @syntax accessElement(arr)
 * @file constant_time.js
 * @author thesyscoder
 */

/**
 * //ANCHOR - Algorithm for accessing elements
 * 1. Start
 * 2. Declare a function with an array parameter
 * 3. Access the first element using index 0
 * 4. Access the third element using index 2
 * 5. Access the last element using the index length - 1
 * 6. Return an array containing the first, third, and last elements
 * 7. Stop
 */

function accessElement(arr) {
  // Accessing the first element of the array
  const firstElement = arr[0];

  // Accessing the third element of the array
  const thirdElement = arr[2];

  // Accessing the last element of the array
  const lastElement = arr[arr.length - 1];

  // Returning an array containing the first, third, and last elements
  return [firstElement, thirdElement, lastElement];
}

export default accessElement;
