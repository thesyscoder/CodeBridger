/**
 * Tests the calculateFactorial function
 */

import { assert } from "chai";
import calculateFactorial from "../src/calculate_factorial.js";

/**
 * Test cases for calculateFactorial function
 */
describe("calculateFactorial() Function", () => {
  /**
   * Tests that calculateFactorial function return 1 if the input is 1
   */
  it("should return 1 if input is 1", () => {
    assert.equal(calculateFactorial(1), 1);
  });
  /**
   * Tests that calculateFactorial function return 1 if the input is 0
   */
  it("should return 1 if input is 1", () => {
    assert.equal(calculateFactorial(0), 1);
  });
  /**
   * Tests that calculateFactorial function return 120 if the input is 5
   */
  it("should return 1 if input is 1", () => {
    assert.equal(calculateFactorial(5), 120);
  });
});
