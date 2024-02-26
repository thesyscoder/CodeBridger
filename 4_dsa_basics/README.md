# DSA Basics

## Description
Master the basics of Data Structures and Algorithms including arrays, linked lists, stacks, queues, and basic sorting algorithms.

## Problem Statements
1. Implement a stack using arrays.
      - **Input:** Operations like push, pop, etc.
      - **Expected Pseudo Code:**
          ```
          class Stack:
              constructor()
                  this.items = []

              push(item)
                  this.items.push(item)

              pop()
                  return this.items.pop()

              isEmpty()
                  return

 this.items.length === 0

              peek()
                  return this.items[this.items.length - 1]
          ```

2. Implement a queue using linked list.
      - **Input:** Operations like enqueue, dequeue, etc.
      - **Expected Pseudo Code:**
          ```
          class Node:
              constructor(data)
                  this.data = data
                  this.next = null

          class Queue:
              constructor()
                  this.front = null
                  this.rear = null

              enqueue(data)
                  // Insert data at rear of queue

              dequeue()
                  // Remove and return data from front of queue

              isEmpty()
                  return this.front === null
          ```

3. Implement insertion sort.
      - **Input:** An array `arr` of integers.
      - **Expected Pseudo Code:**
          ```
          insertionSort(arr)
              for i from 1 to arr.length
                  key = arr[i]
                  j = i - 1
                  while j >= 0 and arr[j] > key
                      arr[j + 1] = arr[j]
                      j = j - 1
                  arr[j + 1] = key
              print arr
          ```

4. Implement selection sort.
      - **Input:** An array `arr` of integers.
      - **Expected Pseudo Code:**
          ```
          selectionSort(arr)
              n = arr.length
              for i from 0 to n-1
                  minIdx = i
                  for j from i+1 to n
                      if arr[j] < arr[minIdx]
                          minIdx = j
                  temp = arr[minIdx]
                  arr[minIdx] = arr[i]
                  arr[i] = temp
              print arr
          ```

5. Implement a priority queue using binary heap.
      - **Input:** Operations like insert, deleteMin, etc.
      - **Expected Pseudo Code:**
          ```
          class BinaryHeap:
              constructor()
                  this.heap = []

              insert(item)
                  // Insert item into heap

              deleteMin()
                  // Remove and return minimum element from heap

              isEmpty()
                  return this.heap.length === 0

              heapifyUp()
                  // Heapify up to maintain heap property

              heapifyDown()
                  // Heapify down to maintain heap property
          ```
