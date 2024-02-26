# Advanced JavaScript

## Description
Dive into advanced JavaScript topics such as functional programming, asynchronous JavaScript, recursion, and basic data structures.

## Problem Statements
1. Implement map, filter, and reduce functions.
      - **Input:** An array `arr` and functions `mapFn`, `filterFn`, `reduceFn`.
      - **Expected Pseudo Code:**
          ```
          mappedArr = mapFn(arr)
          filteredArr = filterFn(arr)
          reducedValue = reduceFn(arr)
          print mappedArr, filteredArr, reducedValue
          ```

2. Sum of squares of even numbers in an array.
      - **Input:** An array `arr` of integers.
      - **Expected Pseudo Code:**
          ```
          sum = 0
          for each element in arr
              if element % 2 == 0
                  sum += element * element
          print sum
          ```

3. Count occurrence of each word in a text.
      - **Input:** A text `text`.
      - **Expected Pseudo Code:**
          ```
          wordCountMap = {}
          words = split(text)
          for each word in words
              if word in wordCountMap
                  wordCountMap[word]++
              else
                  wordCountMap[word] = 1
          print wordCountMap
          ```

4. Filter out duplicate elements from an array.
      - **Input:** An array `arr` with duplicates.
      - **Expected Pseudo Code:**
          ```
          uniqueArr = []
          for each element in arr
              if element not in uniqueArr
                  uniqueArr.push(element)
          print uniqueArr
          ```

5. Find the longest word in a sentence.
      - **Input:** A sentence `sentence`.
      - **Expected Pseudo Code:**
          ```
          longestWord = ""
          words = split(sentence)
          for each word in words
              if length(word) > length(longestWord)
                  longestWord = word
          print longestWord
          ```
