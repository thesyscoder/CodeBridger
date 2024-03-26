/**
 * The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
 * @syntax [...] or {...}
 * @file spread_operator.js
 * @author thesyscoder
 */

// Array spreading

const numbers = [12, 34, 5, 6];
const moreNumbers = [...numbers, 334, 77, 89];
console.log(moreNumbers);

// Concatenating arrays

const arr1 = [12, 3, 4, 5, 7];
const arr2 = [56, 7, 8, 9, 0];
const combined = [...arr1, ...arr2];
console.log(combined);

// Object spreading

const car = {
  brand: "Tata",
  model: "Harrier",
  price: 2300000,
};
const obj = { ...car };
console.log(obj);
console.log(obj.model);
