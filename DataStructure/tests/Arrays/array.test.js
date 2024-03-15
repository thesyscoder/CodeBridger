/**
 * Test suite for arrayOperations function.
 */
import { assert } from "chai";
import arrayOperations from "../../src/Arrays/array.js";

describe("arrayOperations", function () {
  /**
   * Test case to verify arrayOperations behavior with non-empty array.
   */
  it("should perform operations on a non-empty array", function () {
    // Input array
    const inputArray = [12, 45, 3, 67];

    // Expected output object after performing operations
    const expectedOutput = {
      array: [12, 45, 3, 67, 145], // After pushing 145
      arrayLength: 4, // Length before operations
      firstIndexElement: 12, // First element before change
      shiftedElement: 12, // Shifted element (removed 12)
      slicedArray: [12], // Sliced array from index 0 to 1 (exclusive)
    };

    // Perform array operations
    const result = arrayOperations(inputArray);

    // Check if the result matches the expected output
    assert.deepStrictEqual(result, expectedOutput);
  });

  /**
   * Test case to verify arrayOperations behavior with empty array.
   */
  it('should return "Empty" for an empty array', function () {
    // Input empty array
    const inputArray = [];

    // Expected output when array is empty
    const expectedOutput = "Empty";

    // Perform array operations
    const result = arrayOperations(inputArray);

    // Check if the result matches the expected output
    assert.deepStrictEqual(result, expectedOutput);
  });
});
