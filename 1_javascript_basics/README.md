# JavaScript Basics

## Description

This repository covers the fundamentals of JavaScript programming language, including variables, data types, operators, control flow, loops, functions, scope, and hoisting.

## Problem Statements

### 1. Check number's positivity.

- **Input:** An integer `num`.
- **Expected Pseudo Code:**
  ```
  if num > 0
      print "Positive"
  else if num < 0
      print "Negative"
  else
      print "Zero"
  ```

### 2. Find the area of a circle.

- **Input:** The radius `r` of the circle.
- **Expected Pseudo Code:**
  ```
  area = π * r * r
  print area
  ```

### 3. Swap two numbers.

- **Input:** Two integers `a` and `b`.
- **Expected Pseudo Code:**
  ```
  temp = a
  a = b
  b = temp
  print a, b
  ```

### 4. Check prime number.

- **Input:** An integer `num`.
- **Expected Pseudo Code:**
  ```
  isPrime = true
  for i from 2 to num/2
      if num % i == 0
          isPrime = false
          break
  if isPrime
      print "Prime"
  else
      print "Not Prime"
  ```

### 5. Convert temperature.

- **Input:** Temperature in Celsius `celsius`.
- **Expected Pseudo Code:**
  ```
  fahrenheit = (celsius * 9/5) + 32
  print fahrenheit
  ```

## Additional Practice Questions

### 6. Reverse a string.

- **Input:** A string `str`.
- **Expected Pseudo Code:**
  ```
  reversedStr = ''
  for each character in str from last to first
      add character to reversedStr
  print reversedStr
  ```

### 7. Check if a number is even or odd.

- **Input:** An integer `num`.
- **Expected Pseudo Code:**
  ```
  if num % 2 == 0
      print "Even"
  else
      print "Odd"
  ```

### 8. Calculate factorial of a number.

- **Input:** An integer `num`.
- **Expected Pseudo Code:**
  ```
  factorial = 1
  for i from 1 to num
      factorial = factorial * i
  print factorial
  ```

### 9. Reverse an array.

- **Input:** An array `arr`.
- **Expected Pseudo Code:**
  ```
  reversedArr = []
  for each element in arr from last to first
      add element to reversedArr
  print reversedArr
  ```

### 10. Find the largest element in an array.

- **Input:** An array `arr` of integers.
- **Expected Pseudo Code:**
  ```
  max = arr[0]
  for each element in arr
      if element > max
          max = element
  print max
  ```

## Pattern Printing Code

The repository also includes JavaScript code for printing various patterns.

```javascript
// Pattern 1: Right-angled Triangle
function printRightAngledTriangle(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    pattern += "*".repeat(i) + "\n";
  }
  console.log(pattern);
}

// Pattern 2: Inverted Right-angled Triangle
function printInvertedRightAngledTriangle(n) {
  let pattern = "";
  for (let i = n; i >= 1; i--) {
    pattern += "*".repeat(i) + "\n";
  }
  console.log(pattern);
}

// Pattern 3: Pyramid
function printPyramid(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    pattern += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }
  console.log(pattern);
}

// Usage Examples
console.log("Right-angled Triangle:");
printRightAngledTriangle(5);

console.log("Inverted Right-angled Triangle:");
printInvertedRightAngledTriangle(5);

console.log("Pyramid:");
printPyramid(5);
```
