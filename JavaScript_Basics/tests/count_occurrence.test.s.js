/**
 * Test the countOccurrence function
 */

import { assert } from "chai";
import countOccurrence from "../src/count_occurreneces.js";

/**
 * Test cases for countOccurrence function
 */
describe("countOccurrence() Function", () => {
  /**
   * Tests that countOccurrence function returns 2 if input is "hello" and "l"
   */
  it("should return 2 if input is 'hello' and 'l'", () => {
    assert.equal(countOccurrence("hello", "l"), 2);
  });

  /**
   * Tests that countOccurrence function returns 0 if input is "hello" and "p"
   */
  it("should return 0 if input is 'hello' and 'p'", () => {
    assert.equal(countOccurrence("hello", "p"), 0);
  });
});
