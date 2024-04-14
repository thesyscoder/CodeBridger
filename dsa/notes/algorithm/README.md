# What is algorithm?

An algorithm consists of a series of sequential instructions designed to solve problems. Let's apply this concept to the process of making potato fries by following the steps outlined below.

1. **Ingredients:** Gather potatoes, oil, salt, and spices.
2. **Preparation:** Cut and soak potatoes.
3. **Frying:** Fry potatoes until golden.
4. **Seasoning:** Season fries.
5. **Serve:** Serve hot with optional toppings.

## Types of algorithms

1. **Searching:**
   - Linear search, binary search, hash table lookup
2. **Sorting:**
   - Bubble sort, selection sort, insertion sort, merge sort, quick sort, heap sort
   - Time and space complexity analysis, trade-offs
3. **Dynamic Programming:**
   - Breaking down problems into sub problems, memoization to avoid redundant calculations (e.g., Fibonacci sequence)
4. **Greedy Algorithms:**
   - Making locally optimal choices at each step with the hope of finding a global optimum (e.g., Dijkstra's algorithm for shortest paths)
5. **Backtracking:**
   - Systematically exploring all potential solutions using recursion (e.g., maze solving)

## Searching

## Sorting

A sorting algorithms is an algorithms are used to arrange the elements in specific order. types of sorting algorithms
Bubble sort, selection sort, insertion sort, merge sort, quick sort, heap sort

- **Bubble Sort:** Bubble sort is a sorting algorithm that iteratively steps through a list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the entire list is sorted, with larger elements "bubbling" to the top.

  **Algorithm: Bubble Sort**

  - Step 1: Start
  - Step 2: Get the input array
  - Step 3: Loop through the array elements
  - Step 4: Compare if the current element is greater than the next element
  - Step 5: If true, swap the elements
  - Step 6: Repeat steps 3-5 until the array is sorted
  - Step 7: Stop

* [Bubble sort source code](../src/Sorting/bubble_sort.js)
* [Bubble sort test suit](../tests/Sorting/bubble_sort.test.js)

* **Selection Sort:** The Selection Sort algorithm continually identifies the smallest value in the array and places it at the beginning, iterating through the array until it is fully sorted.
  **Algorithm: Selection Sort**
  - Step1: Start
  - Step2: Get the input array
  - Step3: Loop through the array element
  - Step4: find the lowest element.
  - Step5: Move the lowest element to the front of array
  - Step6: Repeat steps 3-5 until the array is sorted
  - Step7: Stop
