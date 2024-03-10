/**!SECTION
 * Test cases for linearSearch function
 */

import { assert } from "chai";
import linearSearch from "../../src/Big(O)/linear_time.js";

/**
 * Test cases for linearSearch function.
 */

describe("linearSearch() Function", () => {
  /**TODO -
   * Test case that check linear time complexity using linear search, if input is arr and target
   * output should if target found index of target or -1.
   */
  it("should return target index or -1", () => {
    assert.deepStrictEqual(linearSearch([12, 34, 56, 7, 8, 45], 45), 5);
  });
});
