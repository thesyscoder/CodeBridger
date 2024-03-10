/**!SECTION
 * Check O(1) time complexity
 * @param {number[]} arr - The input array.
 * @returns {string[]} O(n) operation
 * @syntax linearSearch(arr,target)
 * @file linear_time.js
 * @author thesyscoder
 */

//TODO - Linear time complexity O(n)
function linearSearch(arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

export default linearSearch;
