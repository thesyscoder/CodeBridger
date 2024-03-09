/** !SECTION
 * Check O(1) time complexity
 * @param {number[]} arr - The input array.
 * @returns {string[]} O(1) operation
 * @syntax accessElement(arr)
 * @file constant_time.js
 * @author thesyscoder
 */

function accessElement(arr) {
  // accessing 0 index element of array
  let firstElement = arr[0];

  // accessing 2 index element af array
  let thirdElement = arr[2];

  // accessing last element of array
  let lastElement = arr[arr.length - 1];

  return [firstElement, thirdElement, lastElement];
}

export default accessElement;
