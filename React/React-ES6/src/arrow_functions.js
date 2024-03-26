/**
 * Arrow functions are a concise way to write functions in JavaScript, providing a shorter syntax compared to traditional function expressions.
 * @syntax - const functionName = () => {}
 * @file arrow_function.js
 * @author thesyscoder
 */

// Basic arrow function
const greetUser = (user) => {
  console.log(`Hello, ${user}`);
};

greetUser("thesyscoder");

// Arrow function with return

const addition = (x, y) => {
  return x + y;
};
console.log(addition(12, 35));
