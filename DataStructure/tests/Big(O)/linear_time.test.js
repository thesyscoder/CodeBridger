/**
 * Test cases for the linearSearch function.
 */

import { assert } from "chai";
import linearSearch from "../../src/Big(O)/linear_time.js";

describe("linearSearch() Function", () => {
  /**
   * This test case checks the linear time complexity using linear search.
   * It verifies if the function correctly returns the index of the target in the array,
   * or -1 if the target is not found.
   */
  it("should return the target index or -1", () => {
    assert.deepStrictEqual(linearSearch([12, 34, 56, 7, 8, 45], 45), 5);
  });
});
