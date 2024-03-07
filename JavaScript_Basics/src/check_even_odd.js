/**
 * Checks if a number is even or odd.
 * @param {number} num - The number to be checked.
 * @returns {void} Prints "Even" if the number is even, otherwise prints "Odd".
 * @description JavaScript Basics - Math
 * @syntax checkEvenOdd(num)
 * @file check_even_odd.js
 * @author thesyscoder
 */

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

export default checkEvenOdd;
