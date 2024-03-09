/**
 * Test the removeDuplicate function
 */
import { assert } from "chai";
import removeDuplicate from "../src/remove_duplicate.js";

/**
 * Tests cases for removeDuplicate function
 */

describe("removeDuplicate() Function", () => {
  /**
   * Test that if removeDuplicate() function return "Empty" if input array is empty
   */

  it("should return empty if input array is empty", () => {
    assert.equal(removeDuplicate([]), "Empty");
  });

  /**
   * Test that if removeDuplicate() function return uniqueArray if input is [22, 22, 34, 56, 77, 22]
   */
  it("should return [ 22, 34, 56, 77 ] if input is [22,33,456,78]", () => {
    assert.deepStrictEqual(
      removeDuplicate([22, 22, 34, 56, 77, 22]),
      [22, 34, 56, 77]
    );
  });
});
