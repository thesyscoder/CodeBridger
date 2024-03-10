/**SECTION
 * Test cases for evaluate expression for calculate the fahrenheit temperature using celsius.
 */
import { assert } from "chai";
import temperatureConvertor from "../src/temperature_converter.js";

/**!SECTION
 * Test cases for temperatureConvertor function
 */

describe("temperatureConvertor() Function", () => {
  /**!SECTION
   * Test that temperatureConvertor function evaluate expression for converting celsius to
   * fahrenheit temperature.
   */
  it("should return fahrenheit temperature as input celsius", () => {
    assert.equal(temperatureConvertor(23), 73.4);
  });
});
