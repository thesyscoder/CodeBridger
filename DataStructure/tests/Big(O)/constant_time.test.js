/**!SECTION
 * Test cases for accessElement function
 */

import { assert } from "chai";
import accessElement from "../../src/Big(O)/constant_time.js";

/**
 * //TODO - Test cases for accessElement function
 */

describe("accessElement() Function", () => {
  //NOTE - Test that function should return array of first, third and last element.
  it("should return first, third and last element", () => {
    assert.deepStrictEqual(accessElement([12, 34, 55, 66, 77]), [12, 55, 77]);
  });
});
