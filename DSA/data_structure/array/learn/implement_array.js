/**
 * implement_array.js
 * @author: thesyscoder
 * @description: Implementing array functions using object-oriented programming approach in JavaScript.
 */

class ArrayImplementation {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //get method the access array elements
  get(index) {
    return this.data[index];
  }

  push(element) {
    this.data[this.length] = element ? element : "undefined";
    this.length++;
    return this.length;
  }

  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  delete(index) {
    if (this.data[index]) {
      delete this.data[index];
      let i = index;
      while (i < this.length - 1) {
        this.data[i] = this.data[i + 1];
        i++;
      }
      this.length--;
    } else {
      console.log("Invalid Index");
    }
  }
}

const arrObj = new ArrayImplementation();

console.log(arrObj.get(-1)); // undefined, as arrays are zero indexed
console.log(arrObj.get(5)); // undefined, out of bounds
arrObj.data[0] = "Hello";
console.log(arrObj.get(0)); // Hello

// Push method implementation
let result = arrObj.push("World");
console.log(result); // 1, as the length is now 1
console.log(arrObj.get(0)); // Hello, still only one item in the array

result = arrObj.push("!");
console.log(result); // 2, two items added to the array
console.log(arrObj.get(1)); // World!

//  Pop method implementation
result = arrObj.pop();
console.log(result); // !, popped value is returned and removed from the array
console.log(arrObj.get(1)); // World, there's only one left in the array

//  Delete method implementation
arrObj.delete(1);
console.log(arrObj.get(1)); // Error: Invalid Index, no item at that index
