/**
 * space_complexity
 * @author: thesyscoder
 * @description: The space required by an algorithm to execute. This is typically measured in terms of the number of primary memory.
 */
const spaceComplexityFun = () => {
  const arr1 = [2, 4, 6, 8]; // O(1) - Constant Space Complexity
  let sum = 0; // O(1) - Constant Space Complexity

  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }

  console.log(`Sum of array elements is ${sum}`);

  // Measure memory usage after the function completes
  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024; // Convert to MB
  console.log(`Memory usage: ${memoryUsage} MB`);
};

spaceComplexityFun();
