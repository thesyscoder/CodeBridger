/**!SECTION
 * Test suite for linear search operation
 */

import { assert } from "chai";
import linearSearch from "../../src/Searching/linear_search.js";

describe("linearSearch", () => {
  /**!SECTION
   * Test case that verify linear search operation with array and target input
   *  */
  const inputArray = [12, 54, 76, 89, 55, 96];
  const target = 55;
  const result = linearSearch(inputArray, target);
  const expectedOutput = 4;
  it("should return index if target found", () => {
    assert.deepStrictEqual(result, expectedOutput);
  });
});
