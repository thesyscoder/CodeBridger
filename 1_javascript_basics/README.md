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
