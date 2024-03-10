/**TODO: Test cases for perform basic arithmetic operations
 */
import { assert } from "chai";
import arithmetic from "../src/basic_arithmetic.js";

describe("basic arithmetic operations", () => {
  it("should return addition of two numbers", () => {
    assert.equal(arithmetic.addition(22, 33), 55);
    assert.equal(arithmetic.addition(12, 12), 24);
  });
  it("should return the result of subtraction", () => {
    assert.equal(arithmetic.subtraction(50, 25), 25);
    assert.equal(arithmetic.subtraction(10, 5), 5);
    // Add more test cases as needed
  });

  it("should return the result of multiplication", () => {
    assert.equal(arithmetic.multiplication(5, 10), 50);
    assert.equal(arithmetic.multiplication(8, 7), 56);
    // Add more test cases as needed
  });

  it("should return the result of division", () => {
    assert.equal(arithmetic.division(100, 5), 20);
    assert.equal(arithmetic.division(81, 9), 9);
    // Add more test cases as needed
  });

  it("should return the result of modulus", () => {
    assert.equal(arithmetic.modulus(10, 3), 1);
    assert.equal(arithmetic.modulus(25, 4), 1);
    // Add more test cases as needed
  });
});
