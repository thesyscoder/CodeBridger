/**
 * Learn O(n)  time complexity
 * @author: thesyscoder
 *  */

/**
 * O(n) - Linear search
 * Defination: In the context of Big O notation, O(n) represents an algorithm or 
 * function whose time complexity or space complexity grows linearly in 
 * proportion to the size of the input data. This means that as the input size (n) increases, 
 * the time taken or the space required by the algorithm also increases linearly.

 */

// example of O(n) using simple linear search.

const LinearSearch = (array, number) => {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      console.log(`${number} found at index ${i}`);
    } else {
      console.log(`${number} is not present in the array`);
    }
  }
  const t1 = performance.now();
  console.log("Time taken : " + (t1 - t0) + " milliseconds.");
};

LinearSearch([1, 2, 3, 4, 5], 3); // Output: "3 found at index 2"
