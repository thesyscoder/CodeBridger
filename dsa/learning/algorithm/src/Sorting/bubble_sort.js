/**!SECTION
 * Perform  bubble sort of input array
 * @param {number[]} - arr
 * @returns {number []} - sorted arr
 * @syntax bubbleSort(arr)
 * @file - bubble_sort.js
 * @author - thesyscoder
 */

/**!SECTION
 * Algorithm: Bubble Sort
 *
 * Step 1: Start
 * Step 2: Get the input array
 * Step 3: Loop through the array elements
 * Step 4: Compare if the current element is greater than the next element
 * Step 5: If true, swap the elements
 * Step 6: Repeat steps 3-5 until the array is sorted
 * Step 7: Stop
 */

/**
 * Time complexity - O(n^2)
 */

// This function performs the Bubble Sort algorithm to sort an array in ascending order
function bubbleSort(arr) {
  // Get the length of the array
  const len = arr.length;

  // Initialize a variable to keep track of whether any elements have been swapped
  let swapped;

  // Continue looping until no elements are swapped
  do {
    // Assume no elements are swapped at the beginning of each iteration
    swapped = false;

    // Loop through the array
    for (let i = 0; i < len - 1; i++) {
      // Compare the current element with the next element
      if (arr[i] > arr[i + 1]) {
        // If the current element is greater than the next element, swap them
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        // Set swapped to true to indicate that at least one swap occurred in this iteration
        swapped = true;
      }
    }

    // Continue looping until no elements are swapped (i.e., array is sorted)
  } while (swapped);

  // Return the sorted array
  return arr;
}

// Export the bubbleSort function as the default export
export default bubbleSort;
