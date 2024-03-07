/**
 * Reverses a given string.
 * @param {string} str - Count the character occurrence in the string
 * @returns {string} count the character occurrence.
 * @description This function takes a string and character as input and
 *              returns the count the occurrence of character.
 * @syntax countOccurrence(str,char)
 * @file count_occurrence.js
 * @author thesyscoder
 */

function countOccurrence(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
  }
  return count;
}

export default countOccurrence;
