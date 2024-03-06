/**
 * Tests the checkEvenOdd function.
 */
import { assert } from "chai";
import checkEvenOdd from "../src/check_even_odd.js";

/**
 * Test cases for the checkEvenOdd function.
 */
describe("checkEvenOdd()", () => {
  /**
   * Tests that checkEvenOdd returns "Even" if the input is an even number.
   */
  it('should return "Even" if input is even number', () => {
    assert.equal(checkEvenOdd(2), "Even");
  });

  /**
   * Tests that checkEvenOdd returns "Odd" if the input is an odd number.
   */
  it('should return "Odd" if input is odd number', () => {
    assert.equal(checkEvenOdd(3), "Odd");
  });
});
