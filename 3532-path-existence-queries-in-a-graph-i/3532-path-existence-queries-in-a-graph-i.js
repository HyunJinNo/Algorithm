/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    const parent = Array.from({ length: n }, (_value, index) => index);
    const rank = Array(n).fill(0);

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }

        return parent[x];
    }

    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX === rootY) {
            return;
        }

        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }

    for (let i = 0; i < n - 1; i++) {
        if (nums[i + 1] - nums[i] <= maxDiff) {
            union(i, i + 1);
        }
    }

    const result = [];

    for (const [u, v] of queries) {
        result.push(find(u) === find(v));
    }

    return result;
};