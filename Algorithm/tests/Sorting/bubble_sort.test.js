/**!SECTION
 * Test suite for bubble sort
 */

import { assert } from "chai";
import bubbleSort from "../../src/Sorting/bubble_sort.js";

// Test case for bubble sort algorithm

describe("bubbleSort", () => {
  /**!SECTION
   * Test that bubble sort algorithm sort the input array in ascending order
   * */
  const inputArray = [5, 3, 7, 2, 8, 1, 6, 4];
  const result = bubbleSort(inputArray);
  const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8];
  it("should return sorted array", () => {
    assert.deepStrictEqual(result, expectedResult);
  });
});
