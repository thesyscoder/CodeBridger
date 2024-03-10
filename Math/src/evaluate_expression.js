/**!SECTION
 * Evaluating expressions with two variables: fractions & decimals
 * @author thesyscoder
 */
import { evaluate, exp } from "mathjs";

function evaluateExpressionsFunction(expression, variables = {}) {
  try {
    const result = evaluate(expression, variables);
    return result;
  } catch (error) {
    return error;
  }
}

// const expression = "(1/3)a - 1 - (1/2)b";
// const result = evaluateExpressionsFunction(expression, { a: 12, b: 6 });
// console.log(result);

export default evaluateExpressionsFunction;
