// tests/say_hello.test.js
/**
 * Tests the sayHello function.
 */

import { assert } from "chai";
import sayHello from "../src/say_hello.js";

describe("sayHello()", () => {
  it('should return "Hello, World!"', () => {
    assert.equal(sayHello(), "Hello, World!");
  });
});
