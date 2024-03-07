/**
 * Performs basic arithmetic operations.
 * @param {number} num1 - The first operand.
 * @param {number} num2 - The second operand.
 * @param {string} operator - The operator to perform the operation. Can be one of: '+', '-', '*', '/'.
 * @returns {number} The result of the arithmetic operation.
 * @description This function performs basic arithmetic operations (addition, subtraction, multiplication, division) on two numbers.
 * @syntax calculate(num1, num2, operator)
 * @file calculator.js
 * @author thesyscoder
 */

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "invalid";
      break;
  }
}

export default calculate;
