/**
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 * @description This function capitalizes the first letter of the input string.
 * @syntax firstLetterUppercase(str)
 * @file first_letter_uppercase.js
 * @author thesyscoder
 */

function firstLetterUppercase(str) {
  // convert the string as array of words
  let words = str.split(" ");

  // iterate through the array of words
  for (let i = 0; i <= words.length - 1; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

export default firstLetterUppercase;
