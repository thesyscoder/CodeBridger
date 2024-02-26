# JavaScript Basics

## Description
Learn the fundamentals of JavaScript programming language including variables, data types, operators, control flow, loops, functions, scope, and hoisting.

## Problem Statements
1. Check number's positivity.
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

2. Find the area of a circle.
      - **Input:** The radius `r` of the circle.
      - **Expected Pseudo Code:**
          ```
          area = π * r * r
          print area
          ```

3. Swap two numbers.
      - **Input:** Two integers `a` and `b`.
      - **Expected Pseudo Code:**
          ```
          temp = a
          a = b
          b = temp
          print a, b
          ```

4. Check prime number.
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

5. Convert temperature.
      - **Input:** Temperature in Celsius `celsius`.
      - **Expected Pseudo Code:**
          ```
          fahrenheit = (celsius * 9/5) + 32
          print fahrenheit
          ```
