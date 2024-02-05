/**
 * reverse_string.js
 * @author: thesyscoder
 * @description: a function that takes in a string and returns the reversed version of it.
 */

function reverseString(str) {
  /**
   * The time complexity for this algorithm is O(n), where n is the length of the input string, because we are iterating through each character in the string once.
   */
  let reversed_string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed_string += str[i];
  }
  return reversed_string;
}

// example usages
const myStr = "Hello World!";
console.log(`Original String: ${myStr}`); // Outputs: Original String:
console.log(`Reversed String: ${reverseString(myStr)}`); // Output  s: Reversed String: !dlroW olleH
