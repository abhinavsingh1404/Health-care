import java.util.*;

public class UnionFindFriendChecker {
    static int[] parent;
    static int[] rank;
    static int count; 

    public static void main(String[] args) {
        int n = 6;  // Number of nodes (0 to 5)
        count = n;  // Initially, each node is its own component

        // Friendships (undirected connections)
        int[][] friendships = {
            {0, 1},
            {1, 2},
            {3, 4}
        };

        // Queries: Are these two people friends (in same group)?
        int[][] queries = {
            {0, 2},  // yes
            {1, 3},  // no
            {3, 4},  // yes
            {2, 5}   // no
        };

        // Step 1: Initialize DSU
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }

        // Step 2: Union all friendship pairs
        for (int[] edge : friendships) {
            union(edge[0], edge[1]);
        }

        // Step 3: Answer queries
        for (int[] query : queries) {
            int u = query[0];
            int v = query[1];
            if (find(u) == find(v)) {
                System.out.println(u + " and " + v + " are friends.");
            } else {
                System.out.println(u + " and " + v + " are NOT friends.");
            }
        }

        // Final count of connected components
        System.out.println("Number of connected components: " + count);
    }

    // Find with path compression
    static int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);  // Path compression
        }
        return parent[x];
    }

    // Union by rank
    static void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX == rootY) return; // already connected

        // Merge two sets and reduce count
        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        count--; // Successfully merged two components
    }
}
