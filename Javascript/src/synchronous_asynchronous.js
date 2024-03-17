/**
 * Demonstrating synchronous & asynchronous behavior in JavaScript.
 */

/**
 * Synchronous: Sequential execution of tasks where each task waits for the previous one to complete.
 */

// Example:
console.log("==== Synchronous ====");
console.log("First message: This will be printed first");
console.log("Second message: This will be printed second");
console.log("Third message: This will be printed third");

/**
 * Asynchronous: Execution of tasks that may not complete in sequential order, allowing other tasks to run in the meantime.
 */

// Example: Using setTimeout to demonstrate asynchronous behavior
console.log("==== Asynchronous: setTimeout ====");
/**
 * Prints a message after a specified delay.
 * @param {string} message - The message to be printed.
 * @param {number} delay - The delay in milliseconds before printing the message.
 */
function printMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

// Example usage:
console.log("This will execute first");
printMessage("This will execute second", 2000);
printMessage("This will execute third", 3000);

/**
 * Callbacks: Callbacks are exclusively functions that execute either
 *  after a designated interval or in response to an event.
 */

// Example: Using setTimeout demonstrate the callbacks

function callbackFunction() {
  console.log("Callback function executed.");
}

// Call setTimeout with a callback function and delay 2000 second.

setTimeout(callbackFunction, 2000);

/**
 * Promise: Represents a Promise object that signifies the eventual completion or failure of an asynchronous operation.
 */

// Example: Using setTimeout to demonstrate a Promise

// Create a new Promise
let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    let success = true;
    // Check if the operation was successful
    if (success) {
      // If successful, resolve the Promise with a success message
      resolve("Promise resolved successfully.");
    } else {
      // If unsuccessful, reject the Promise with an error message
      reject("Promise is rejected.");
    }
  }, 4000); // Set timeout for 4 seconds
});

// Handle the resolved or rejected Promise
myPromise
  .then((message) => {
    // If Promise is resolved, log the success message
    console.log(message);
  })
  .catch((error) => {
    // If Promise is rejected, log the error message
    console.error(error);
  });

/**
 * Async/Await : In JavaScript, async declares a function to work asynchronously, returning a promise, 
  while await pauses execution until a promise resolves, making asynchronous code look synchronous.
 */

console.log("==== Async and Await  ====");
// Example
// Asynchronous function that return promise
function fetchData() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Data fetched successfully.");
    }, 2000);
  });
}

// using async / await to handle asynchronous operation
async function fetchDataAndProcess() {
  try {
    console.log("Fetching data . . .");
    const data = await fetchData(); // wait until the promise is resolved
    console.log("Data received : " + data);
  } catch (error) {
    console.error(error);
  }
}

// call the asynchronous function
fetchDataAndProcess();
