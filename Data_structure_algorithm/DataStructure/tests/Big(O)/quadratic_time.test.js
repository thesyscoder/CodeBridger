/**!SECTION
 * Test cases for quadraticNestedLoop
 */

import { assert } from "chai";
import sinon from "sinon";
import quadraticNestedLoop from "../../src/Big(O)/quadratic_time.js";

describe("quadraticNestedLoop() Function", () => {
  it("should iterate over each element in two input arrays", () => {
    const arr1 = [12, 43, 54, 13];
    const arr2 = [12, 54, 13, 56];

    // Mock console.log
    const consoleLogStub = sinon.stub(console, "log");

    quadraticNestedLoop(arr1, arr2);

    // Verify console.log calls
    assert.equal(consoleLogStub.callCount, arr1.length * arr2.length);

    // Verify console.log arguments
    arr1.forEach((element1) => {
      arr2.forEach((element2) => {
        assert.isTrue(consoleLogStub.calledWith(element1, element2));
      });
    });

    // Restore console.log
    consoleLogStub.restore();
  });
});
