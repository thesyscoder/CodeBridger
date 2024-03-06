/**
 * Tests the calculate function
 */

import { assert } from "chai";
import calculate from "../src/calculator.js";

/**
 * Test cases for the calculate function
 */

describe("calculate(", () => {
  /**
   * Tests that calculate function returns addition of two numbers
   */
  it('should return addition of two numbers if input is num1, num2 and "+" operator', () => {
    assert.equal(calculate(2, 2, "+"), 4);
  });

  /**
   *  Tests that calculate function returns subtraction of two numbers
   */
  it('should return subtraction of two numbers if input is num1, num2 and "+" operator', () => {
    assert.equal(calculate(5, 3, "-"), 2);
  });
  /**
   *  Tests that calculate function returns multiplication of two numbers
   */
  it('should return multiplication of two numbers if input is num1, num2 and "+" operator', () => {
    assert.equal(calculate(7, 3, "*"), 21);
  });
  /**
   *  Tests that calculate function returns division of two numbers
   */
  it('should return division of two numbers if input is num1, num2 and "+" operator', () => {
    assert.equal(calculate(8, 2, "/"), 4);
  });
});
