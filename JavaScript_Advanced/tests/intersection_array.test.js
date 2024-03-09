/**
 * Test intersectionArray function
 */
import { assert } from "chai";
import intersectionArray from "../src/intersection_array.js";

/**
 * Test cases for intersectionArray(arr1,arr2) function
 */

describe("intersectionArray() Function", () => {
  /**
   * Test that intersectionArray function return [ 22, 66 ] if input is [11, 22, 44, 55, 66], [22, 33, 66, 77]
   */
  it("should return intersection elements", () => {
    assert.deepStrictEqual(
      intersectionArray([11, 22, 44, 55, 66], [22, 33, 66, 77]),
      [22, 66]
    );
  });
});
