/**
 * Converts temperature from Celsius to Fahrenheit.
 * @param {number} celsius - Temperature in Celsius.
 * @returns {void} Prints the converted temperature in Fahrenheit.
 * @description JavaScript Basics - Variables, Operators, Math, Functions, Scope, Control Flow
 * @syntax convertTemperature(celsius)
 * @file convert_temperature.js
 */

function convertTemperature(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(1)}°F`);
}

// Testing the function with different values of 'celsius' parameter.
console.log("Testing 'convertTemperature()'");
convertTemperature(20); // Expected output: "20°C is equal to 68.0°F"
convertTemperature(-40); // Expected output: "-40°C is equal to -40.0°F"
convertTemperature(100); // Expected output: "100°C is equal to 212.0°F"
