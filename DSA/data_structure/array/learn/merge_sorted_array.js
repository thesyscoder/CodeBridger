/**
 * merge_sorted_array.js
 * @author: thesyscoder
 * @description: Merge two sorted arrays into one sorted array in ascending order.
 */

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0; // pointers for the input arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr1[j]) {
      mergedArray.push(arr1[i++]);
    } else {
      mergedArray.push(arr2[j++]);
    }
  }

  // add remaining elements from arr1 and arr2 to mergedArray
  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// test case
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log("Input Array 1:", arr1);
console.log("Input Array 2:", arr2);
console.log("Merged Sorted Array: ", mergeSortedArrays(arr1, arr2));
