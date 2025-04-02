# Breadth-First Search (BFS)

Breadth-First Search is a graph traversal algorithm used to explore all vertices reachable from a given starting node.

### 📈 Time Complexity
- O(V + E)

### 🧠 Description
BFS uses a queue to explore nodes level by level.

### 💻 Code (C++)
```cpp
void bfs(int start, vector<vector<int>>& adj, vector<bool>& visited) {
    queue<int> q;
    visited[start] = true;
    q.push(start);
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}
```

### ✅ Example
Try BFS from node 0 in a connected graph.
