/**
 * control_structure.js
 * @author: thesyscoder
 * @description: Control structures are used to control the flow of the program execution based on certain conditions. JavaScript supports if...else statements and switch statements for conditional execution.
 */

var x = 10;

// if-else statement

if (x === 10) {
  console.log("The value of x is 10");
} else {
  console.log("The value of x is not 10");
}

// switch statement

var day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Unknown day");
}
