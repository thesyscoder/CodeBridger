/**
 * Test the findMaxNumber function
 */

import { assert } from "chai";
import findMaxNumber from "../src/find_max_number.js";

/**
 * Test cases for findMaxNumber function
 */
describe("findMaxNumber() Function", () => {
  /**
   * Tests that findMaxNumber function returns 34 if input is [12,34,3,16,27]
   */
  it("should return 34 if input is [12,34,3,16,27]", () => {
    assert.equal(findMaxNumber([12, 34, 3, 16, 27]), 34);
  });
});
