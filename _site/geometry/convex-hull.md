# Convex Hull (Graham Scan)

The convex hull of a set of points is the smallest convex polygon that contains all the points.

### 📈 Time Complexity
- O(n log n)

### 💡 Idea
Sort the points, then construct the lower and upper hulls.

### 💻 Code (C++)
```cpp
struct Point {
    int x, y;
    bool operator<(const Point& p) const {
        return x < p.x || (x == p.x && y < p.y);
    }
};
int cross(Point O, Point A, Point B) {
    return (A.x - O.x)*(B.y - O.y) - (A.y - O.y)*(B.x - O.x);
}
vector<Point> convex_hull(vector<Point> P) {
    int n = P.size(), k = 0;
    vector<Point> H(2*n);
    sort(P.begin(), P.end());
    for (int i = 0; i < n; ++i) {
        while (k >= 2 && cross(H[k-2], H[k-1], P[i]) <= 0) k--;
        H[k++] = P[i];
    }
    for (int i = n-2, t = k+1; i >= 0; --i) {
        while (k >= t && cross(H[k-2], H[k-1], P[i]) <= 0) k--;
        H[k++] = P[i];
    }
    H.resize(k-1);
    return H;
}
```
