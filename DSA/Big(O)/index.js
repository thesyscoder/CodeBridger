/**
This script, index.js, is intended for learning Big O notations.
It provides examples and explanations of different Big O notations,
helping users understand the time and space complexities of algorithms.
*/

// work with Big O and scalability

const names = new Array(200).fill("Alice");

function findName(array) {
  let t0 = performance.now(); // start timer
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Ian") {
      console.log("found");
    } else {
      console.log("not found");
    }
  }
  let t1 = performance.now(); // end timer
  console.log(`Time taken: ${t1 - t0}ms`);
}
