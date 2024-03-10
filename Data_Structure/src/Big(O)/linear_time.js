/**!SECTION
 * Check O(1) time complexity
 * @param {number[]} arr - The input array.
 * @returns {string[]} O(n) operation
 * @syntax linearSearch(arr,target)
 * @file linear_time.js
 * @author thesyscoder
 */

/**
 * //ANCHOR - Algorithm for Linear Search
 * step1 = start
 * step2 = declare a function with parameters array and target
 * step3 = initialize found to false
 * step4 = iterate over each element ele in array (O(n))
 * step5 =    if ele equals target, set found to true and break loop
 * step6 = if found is true, return the index of target
 * step7 = if found is false, return -1
 * step8 = stop
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
