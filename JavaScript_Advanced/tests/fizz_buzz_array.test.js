/**
 * Test the fizzBuzzArray function
 */

import { assert } from "chai";
import fizzBuzzArray from "../src/fizz_buzz_array.js";

/**
 * Test cases for fizzBuzzArray function
 */

describe("fizzBuzzArray() Function", () => {
  /**
     * Test that fizzBuzzArray() function returns [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"],
        If input is [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    */
  it("should return fizz-buzz array", () => {
    assert.deepStrictEqual(
      fizzBuzzArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
      [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ]
    );
  });
});
