function findAverage(arr) {
  let sum = 0;
  let avg = 0;
  if (arr.length === 0) {
    return undefined;
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return { sum, avg };
}

// Example usage:
const inputArr = [23, 45, 6, 71, 34, 1];
console.log(`Given array : ${inputArr}`);
const result = findAverage(inputArr);
console.log("Average :", result.avg);
