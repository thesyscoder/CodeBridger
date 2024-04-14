/**!SECTION
 * Test the fibonacci function
 */
import { assert } from "chai";
import fibonacci from "../../src/Fibonacci/fibonacci_series.js";

/**!SECTION
 * Test case for test the fibonacci function
 */
describe("fibonacci() function", () => {
  /**!SECTION
   * Test that fibonacci function return array of fibonacci series of input
   */
  it("should return the array of fibonacci series", () => {
    assert.deepStrictEqual(fibonacci(3), [0, 1, 1, 2, 3]);
  });
});
