/**
 * functions.js
 * @author: thesyscoder
 * @description:  Functions are blocks of reusable code. They can be declared using the function keyword.
 */

//Named Functions: These are standard functions declared with a name.

function add(a, b) {
  return a + b;
}

//Anonymous Functions: These functions don't have a name and are usually assigned to variables or used as arguments to other functions.
var multiply = function (a, b) {
  return a * b;
};

// Arrow Functions (ES6+): Arrow functions are a concise syntax for writing functions. They are anonymous and have a more concise syntax compared to traditional functions.
var divide = (a, b) => {
  return a / b;
};

// test function

console.log(add(12, 12));
console.log(multiply(6, 7));
console.log(divide(98, 3));
