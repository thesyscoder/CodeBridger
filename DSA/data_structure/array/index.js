/**
 *  arrays.js
 *  @author: thesyscoder
 *  @description: learn array methods in JavaScript
 *
 */

// create array
const names = ["John", "Mark", "Sam", "Swap"];

//  access elements using index (zero-based)
console.log(names[0]); // John

// add element in array (Push method)

names.push("Jane"); //O(1) as push() does not change the length of an Array, it only adds to the end
console.log(names); // [ 'John', 'Mark', 'Sam', 'Swap', 'Jane' ]

// remove last element from the array (Pop method)
names.pop(); // O(1) as  pop() removes the last element without changing the length of the array.
console.log(names); // [ 'John', 'Mark', 'Sam', 'Swap']

// unshift  - adds an item to the beginning of an array and returns new length of the array
// shift    - removes the first element from an array and returns that removed element

names.unshift("Zara"); // O(n) as it needs to move all existing elements by one position
console.log(names); // ['Zara','John', 'Mark', 'Sam', 'Swap']

names.shift(); // O(n) as it needs to move all existing elements by one position
console.log(names); // ['John', 'Mark', 'Sam', 'Swap ']

// splice  - changes contents of an array, can also be used to insert content at a specific location
let fruits = ["Apple", "Banana", "Mango", "Grapes"];
fruits.splice(2, 0, "Durian"); // O(n/2) - Durian is inserted at third position
// Apple, Banana, Durian, Mango, Grapes
console.log(fruits);

fruits.splice(3, 1); // Removes single element from fourth position
// Apple, Banana, Durian, Grapes
console.log(fruits);

fruits.splice(1, 2); // Deleting two elements starting from second position
// Apple, Grapes
console.log(fruits);

// static array and dynamic array

let arr = Array(5); // creates empty array with five undefined values
console.log(arr); // [undefined, undefined, undefined, undefined, undefined]

arr = Array("Hello"); // creates array with string Hello repeated
console.log(arr); // ['H', 'e', 'l', 'l', 'o']
