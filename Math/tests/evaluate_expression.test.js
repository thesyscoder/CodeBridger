/**SECTION
 * Test cases for Evaluating expressions with two variables: fractions & decimals
 */

import { assert } from "chai";
import evaluateExpressionsFunction from "../src/evaluate_expression.js";

/**SECTION
 * Test cases for evaluateExpressionsFunction
 */

describe("evaluateExpressionsFunction() Function", () => {
  /**!SECTION
   * Evaluate (3/2)y - 3 + (5/2)z  when y = 4 and z = 3
   */
  const expression1 = "(3/2)y - 3 + (5/3)z";
  const y = 4;
  const z = 3;
  it("should evaluate expression and return 8", () => {
    assert.deepEqual(evaluateExpressionsFunction(expression1, { y, z }), 8);
  });

  /**!SECTION
   * Evaluate 13 - 0.5w + 6x when w = 10 and x = 1/2
   */
  const expression2 = "13 - 0.5w + 6x";
  const w = 10;
  const x = 1 / 2;
  it("should evaluate expression and return 11", () => {
    assert.deepEqual(evaluateExpressionsFunction(expression2, { w, x }), 11);
  });

  /**!SECTION
   * Evaluate (1/3)m - 1 - (1/2) when m=21 and n=12
   */
  const expression3 = "(1/3)m - 1 - (1/2)n";
  const m = 21;
  const n = 12;
  it("should evaluate expression and return 0", () => {
    assert.deepEqual(evaluateExpressionsFunction(expression3, { m, n }), 0);
  });

  /**!SECTION
   * Evaluate 8p + 3q - 18 when p = 1/2 and q=7
   */
  const expression4 = "8p + 3q - 18";
  const p = 1 / 2;
  const q = 7;
  it("should evaluate expression and return 7", () => {
    assert.deepEqual(evaluateExpressionsFunction(expression4, { p, q }), 7);
  });
});
