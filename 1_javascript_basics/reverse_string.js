/**
 * Reverses a given string.
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 * @description This function takes a string as input and returns the reversed string.
 * @syntax reverseString(str)
 * @file reverse_string.js
 * @author thesyscoder
 */

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const originalString = "Hello World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW olleH"
