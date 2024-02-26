# Intermediate JavaScript

## Description
Explore intermediate concepts of JavaScript including arrays, objects, ES6+ features, DOM manipulation, and error handling.

## Problem Statements
1. Sum of elements in an array.
      - **Input:** An array `arr` of integers.
      - **Expected Pseudo Code:**
          ```
          sum = 0
          for each element in arr
              sum += element
          print sum
          ```

2. Remove duplicates from an array.
      - **Input:** An array `arr` with duplicates.
      - **Expected Pseudo Code:**
          ```
          newArr = []
          for each element in arr
              if element not in newArr
                  newArr.push(element)
          print newArr
          ```

3. Maximum and minimum elements in an array.
      - **Input:** An array `arr` of integers.
      - **Expected Pseudo Code:**
          ```
          max = arr[0]
          min = arr[0]
          for each element in arr
              if element > max
                  max = element
              if element < min
                  min = element
          print max, min
          ```

4. Sort an array of integers.
      - **Input:** An array `arr` of integers.
      - **Expected Pseudo Code:**
          ```
          arr.sort()
          print arr
          ```

5. Check equality of two arrays.
      - **Input:** Two arrays `arr1` and `arr2`.
      - **Expected Pseudo Code:**
          ```
          if arr1.length != arr2.length
              print "Not Equal"
          else
              isEqual = true
              for i from 0 to arr1.length
                  if arr1[i] != arr2[i]
                      isEqual = false
                      break
              if isEqual
                  print "Equal"
              else
                  print "Not Equal"
          ```
