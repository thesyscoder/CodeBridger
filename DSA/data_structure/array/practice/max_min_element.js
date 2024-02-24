/**
 * Finds the maximum and minimum elements in an array.
 *
 * @param {number[]} arr - The input array containing numbers.
 * @returns {Object} An object containing the maximum and minimum elements found in the array.
 *                   If the input array is empty, returns an object with 'max' and 'min' set to null.
 */
function find_max_min(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    console.log("Array is empty");
  }

  // Initialize variables to store maximum and minimum values
  let max = arr[0];
  let min = arr[0];

  // Iterate through the array to find the maximum and minimum elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // Return an object containing the maximum and minimum elements
  return { max, min };
}

// Example usage:
result = find_max_min([34, 35, 54, 775, 22, 9, 43]);
console.log(`Maximum element : ${result.max}`);
console.log(`Minimum element: ${result.min}`);
