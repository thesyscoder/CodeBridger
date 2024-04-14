/**!SECTION
 * Learn linear search
 * @param {number[]} - arr
 * @param {number} - target
 * @returns {number} - index
 * @syntax - linearSearch(arr,target)
 * @file - linear_search.js
 * @author thesyscoder
 */

/**!SECTION
 * Algorithm
 * step 1 : start
 * step 2 : input array and target
 * step 3 : loop through the array elements
 * step 4 : Check if arr[i] equals target
 * step 5 : if found, return index
 * step 6 : stop
 */

// Time Complexity: O(n) - Linear Time Complexity
function linearSearch(arr, target) {
  // Loop through the array elements
  for (let i = 0; i < arr.length; i++) {
    // check if arr[i] equals target
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

export default linearSearch;
