/**
 * //ANCHOR - 
 *  Prints 'Fizz' if the element is divisible by 3, 'Buzz' if divisible by 5,
 * and 'FizzBuzz' if divisible by both 3 and 5.
 * @param {number[]} arr - The input array.
 * @returns {string[]} The modified array with Fizz, Buzz, or FizzBuzz substitutions.
 * @syntax fizzBuzzArray(arr)
 * @file fizz_buzz_array.js
 * @author thesyscoder
 */

function fizzBuzzArray(arr) {
  let result = [];
  if (arr.length === 0) {
    return "Empty";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      result.push("FizzBuzz");
    } else if (arr[i] % 3 === 0) {
      result.push("Fizz");
    } else if (arr[i] % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
export default fizzBuzzArray;
