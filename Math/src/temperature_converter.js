/**SECTION
 * Convert the celsius temperature into fahrenheit
 * @param {number} - temperature in celsius
 * @returns {number} - temperature in fahrenheit
 * @syntax - temperatureConvertor(celsius)
 * @file temperature_convertor.js
 * @author thesyscoder
 */
import { evaluate, exp } from "mathjs";
function temperatureConvertor(celsius) {
  let f = evaluate("(9/5)celsius + 32", { celsius });
  return f;
}

export default temperatureConvertor;
