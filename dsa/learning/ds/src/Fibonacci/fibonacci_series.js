/**!SECTION
 * print the fibonacci series of give input target
 * @param {number} - target
 * @return {numbers[]} - Returns the fibonacci series.
 * @syntax - fibonacci(n)
 * @file fibonacci_series.js
 * @author thesyscoder
 */

/**!SECTION
 * ALgorithm:
 * step1: define the function with n parameter
 * step2: create const for 0 and 1
 * step3: while to target n
 * step4: sum of prev + next
 * step5: stop
 */

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

export default fibonacci;
