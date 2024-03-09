/**
 * find intersection between to array (common elements)
 * @param {number[]} arr - The input array.
 * @returns {string[]} The modified array with intersection elements.
 * @syntax intersectionArray(arr1,arr2)
 * @file intersection_array.js
 * @author thesyscoder
 */

function intersectionArray(arr1, arr2) {
  if (arr1.length === 0) {
    return "Empty";
  }
  let intersection = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

console.log(intersectionArray([11, 22, 44, 55, 66], [22, 33, 66, 77]));
export default intersectionArray;
