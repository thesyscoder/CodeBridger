/**
 * Tests the first_letter_uppercase function
 */

import { assert } from "chai";
import firstLetterUppercase from "../src/first_letter_uppercase.js";

/**
 * Test cases for firstLetterUppercase function
 */

describe("firstLetterUppercase() Function", () => {
  /**
   * Test that firstLetterUppercase function returns Welcome To Javascript World! if input
   * is welcome to javascript world!.
   */
  it("should return capitalizes the first letter of the input string", () => {
    assert.equal(
      firstLetterUppercase("welcome to javascript world!"),
      "Welcome To Javascript World!"
    );
  });
});
