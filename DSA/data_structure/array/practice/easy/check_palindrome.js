/**
 * Checks if the given array is a palindrome.
 *
 * @param {any[]} arr - The input array.
 * @returns {boolean} - True if the array is a palindrome, false otherwise.
 * @description This function checks if the input array is a palindrome, meaning it reads the same forwards and backwards.
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1) - The space used is constant regardless of the size of the input array.
 */
function isPalindrome(arr) {
  if (arr.length === 0) {
    return undefined; // or handle the empty array case based on your requirements
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false; // If elements at start and end positions don't match, it's not a palindrome
    }
    start++;
    end--;
  }

  return true; // If all comparisons passed, it's a palindrome
}

// Example usage:
const palindromeArr = [1, 2, 3, 4, 3, 2, 1];
console.log(`Is the array a palindrome? ${isPalindrome(palindromeArr)}`); // Output: true

const nonPalindromeArr = [1, 2, 3, 4, 5];
console.log(`Is the array a palindrome? ${isPalindrome(nonPalindromeArr)}`); // Output: false
