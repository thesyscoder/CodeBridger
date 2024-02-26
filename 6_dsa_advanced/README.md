# DSA Advanced

## Description
Master advanced Data Structures and Algorithms topics including advanced graph algorithms, dynamic programming, and string algorithms.

## Problem Statements
1. Implement Dijkstra's algorithm.
      - **Input:** A graph `graph` and source vertex `src`.
      - **Expected Pseudo Code:**
          ```
          dijkstra(graph, src)
              dist = new Array(graph.length)
              visited = new Array(graph.length)
              for each vertex in graph
                  dist[vertex] = Infinity
                  visited[vertex] = false
              dist[src] = 0
              for each vertex in graph
                  u = minDistance(dist, visited)
                  visited[u] = true
                  for each neighbor v of u
                      if !visited[v] and dist[u] + graph[u][v] < dist[v]
                          dist[v] = dist[u] + graph[u][v]
              print dist
          ```

2. Implement Bellman-Ford algorithm.
      - **Input:** A graph `graph` and source vertex `src`.
      - **Expected Pseudo Code:**
          ```
          bellmanFord(graph, src)
              dist = new Array(graph.length)
              for each vertex in graph
                  dist[vertex] = Infinity
              dist[src] = 0
              for i from 1 to graph.length - 1
                  for each edge (u, v) in graph
                      if dist[u] + graph[u][v] < dist[v]
                          dist[v] = dist[u] + graph[u][v]
              for each edge (u, v) in graph
                  if dist[u] + graph[u][v] < dist[v]
                      print "Graph contains negative weight cycle"
              print dist
          ```

3. Implement Knuth-Morris-Pratt (KMP) algorithm.
      - **Input:** A text string `text` and a pattern string `pattern`.
      - **Expected Pseudo Code:

**
          ```
          kmp(text, pattern)
              lps = computeLPSArray(pattern)
              i = 0
              j = 0
              while i < text.length
                  if pattern[j] == text[i]
                      i++
                      j++
                  if j == pattern.length
                      print "Pattern found at index " + (i - j)
                      j = lps[j - 1]
                  else if i < text.length and pattern[j] != text[i]
                      if j != 0
                          j = lps[j - 1]
                      else
                          i++
          ```

4. Implement Rabin-Karp algorithm.
      - **Input:** A text string `text` and a pattern string `pattern`.
      - **Expected Pseudo Code:**
          ```
          rabinKarp(text, pattern)
              n = text.length
              m = pattern.length
              p = 0
              t = 0
              h = 1
              d = 256
              q = 101 // Prime number
              for i from 0 to m-1
                  h = (h * d) % q
              for i from 0 to m-1
                  p = (d * p + pattern[i]) % q
                  t = (d * t + text[i]) % q
              for i from 0 to n-m
                  if p == t
                      flag = true
                      for j from 0 to m-1
                          if text[i+j] != pattern[j]
                              flag = false
                              break
                      if flag
                          print "Pattern found at index " + i
                  if i < n-m
                      t = (d * (t - text[i] * h) + text[i+m]) % q
                      if t < 0
                          t = t + q
          ```

5. Solve various problems on platforms like LeetCode and HackerRank.
      - **Input:** Problems and solutions from platforms.
      - **Expected Pseudo Code:** Varies depending on the problem.
