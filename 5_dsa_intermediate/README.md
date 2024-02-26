# DSA Intermediate

## Description
Learn intermediate Data Structures and Algorithms topics including trees, graphs, and advanced sorting algorithms.

## Problem Statements
1. Implement a binary search tree.
      - **Input:** Operations like insert, delete, search, etc.
      - **Expected Pseudo Code:**
          ```
          class Node:
              constructor(data)
                  this.data = data
                  this.left = null
                  this.right = null

          class BinarySearchTree:
              constructor()
                  this.root = null

              insert(data)
                  // Insert data into BST

              delete(data)
                  // Delete data from BST

              search(data)
                  // Search data in BST
          ```

2. Find the height of a binary tree.
      - **Input:** A binary tree.
      - **Expected Pseudo Code:**
          ```
          height(tree)
              if tree is null
                  return 0
              else
                  leftHeight = height(tree.left)
                  rightHeight = height(tree.right)
                  return max(leftHeight, rightHeight) + 1
          ```

3. Implement breadth-first search (BFS) in a graph.
      - **Input:** A graph.
      - **Expected Pseudo Code:**
          ```
          bfs(graph, start)
              visited = {}
              queue = [start]
              while queue is not empty
                  node = queue.pop(0)
                  if node not in visited
                      visited[node] = true
                      for neighbor in graph[node]
                          queue.append(neighbor)
              print visited
          ```

4. Implement depth-first search (DFS) in a graph.
      - **Input:** A graph.
      - **Expected Pseudo Code:**
          ```
          dfs(graph, node, visited)
              visited[node] = true
              for neighbor in graph[node]
                  if neighbor not in visited
                      dfs(graph, neighbor, visited)
          ```

5. Implement quicksort.
      - **Input:** An array `arr` of integers.
      - **Expected Pseudo Code:**
          ```
          quickSort(arr, low, high)
              if low < high
                  pi = partition(arr, low, high)
                  quickSort(arr, low, pi - 1)
                  quickSort(arr, pi + 1, high)

          partition(arr, low, high)
              pivot = arr[high]
              i = low - 1
              for j from low to high-1
                  if arr[j] < pivot
                      i++
                      swap arr[i] with arr[j]
              swap arr[i + 1] with arr[high]
              return i + 1
          ```
