/**
 * Represents a car with properties like make, model, and year.
 * @typedef {Object} Car
 * @property {string} make - The make of the car.
 * @property {string} model - The model of the car.
 * @property {number} year - The year of the car.
 */

/**
 * Prints out the details of the car.
 * @param {Car} car - The car object to print details for.
 * @returns {void}
 * @example
 * const myCar = { make: 'Toyota', model: 'Camry', year: 2022 };
 * printCarDetails(myCar); // Output: Make: Toyota, Model: Camry, Year: 2022
 * @file car_details_printer.js
 * @author thesyscoder
 */

const printCarDetails = (car) => {
  console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
};

// Example usage:
const myCar = { make: "Toyota", model: "Camry", year: 2022 };
printCarDetails(myCar); // Output: Make: Toyota, Model: Camry, Year: 2022
