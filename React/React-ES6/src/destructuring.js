/**
 * Destructuring is a feature in JavaScript that allows for unpacking values from arrays or objects into distinct variables.
 * @syntax - const [value1, value2] = object
 * @file destructuring.js
 * @author thesyscoder
 */

// Array destructuring
const cars = ["BMW", "Audi", "Ford", "TATA", "Honda"];

const [bmw, audi, ...rest] = cars;
console.log(bmw);
console.log(audi);
console.log(rest);

// Object destructuring

const person = {
  firstName: "Tony",
  lastName: "Stark",
  movies: ["Iron Man", "Avengers", "Civil Wars"],
  display: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const { firstName, lastName, movies } = person;

console.log(firstName); // Output: Tony
console.log(lastName); // Output: Stark
console.log(movies); // Output: ["Iron Man", "Avengers", "Civil Wars"]
console.log(person.display()); // Output: Tony Stark
