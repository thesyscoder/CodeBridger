# Array Operations

This repository contains JavaScript solutions for various array-related problems. It includes functions for common array operations such as reversing an array, finding the maximum and minimum elements, removing duplicates, rotating an array, and merging sorted arrays.

## Installation

To use the functions provided in this repository, you can simply copy the JavaScript code from the respective files into your project or include them as modules.

## Usage

Each function is implemented in its own JavaScript file and can be used independently. Here's how you can use each function:

1. **Reverse Array**: `reverseArray(arr)`

   - Reverses the given array in-place.

2. **Find Maximum and Minimum**: `findMaxMin(arr)`

   - Finds the maximum and minimum elements in the given array.

3. **Remove Duplicates**: `removeDuplicates(arr)`

   - Removes duplicate elements from the given array.

4. **Rotate Array**: `rotateArray(arr, steps)`

   - Rotates the array to the right by the given number of steps.

5. **Merge Sorted Arrays**: `mergeSortedArrays(arr1, arr2)`
   - Merges two sorted arrays into a single sorted array.

Example usage:

```javascript
const {
  reverseArray,
  findMaxMin,
  removeDuplicates,
  rotateArray,
  mergeSortedArrays,
} = require("./arrayOperations.js");

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(findMaxMin([1, 3, 5, 2, 4])); // Output: { max: 5, min: 1 }
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
```
