/**
 * Demonstrating Functions in JavaScript
 */

/**
 * Greets the user with a welcome message.
 * @param {string} name - The name of the person to greet.
 */
function greet(name) {
  console.log(`Welcome, ${name}`);
}

// call the function
greet("thesyscoder");

/**
 * Adds two numbers and returns the result.
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of the two numbers.
 */
const addition = (a, b) => a + b;

// call the function
console.log(addition(12, 5));

/**
 * Greets the user with a hello message.
 * @param {string} name - The name of the person to greet.
 */
const sayHello = function (name) {
  console.log(`Hello, ${name}`);
};

// call the function
sayHello("Jake");
