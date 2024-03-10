/**!SECTION
 * check O(n2) time complexity
 * @param {number[]} arr - The input array.
 * @returns {string[]} O(n^2) operation
 * @syntax quadraticNestedLoop(arr,target)
 * @file quadratic_time.js
 * @author thesyscoder
 */

/** ANCHOR - Algorithm for Nested Loop (O(n^2))
 * step1 - start
 * step2 - declare a function with parameter array
 * step3 - iterate over each element in the array using a loop (o(n))
 * step4 - iterate over each element in the array again using for loop
 * step5 - stop
 */

function quadraticNestedLoop(arr1, arr2) {
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      console.log(arr1[i], arr2[j]);
    }
  }
}

export default quadraticNestedLoop;
