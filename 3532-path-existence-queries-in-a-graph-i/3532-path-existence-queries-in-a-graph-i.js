/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    const parent = Array(n).fill(0);
    
    for (let i = 0; i < n - 1; i++) {
        if (nums[i + 1] - nums[i] <= maxDiff) {
            parent[i + 1] = parent[i];
        } else {
            parent[i + 1] = parent[i] + 1;
        }
    }

    const result = [];

    for (const [u, v] of queries) {
        result.push(parent[u] === parent[v]);
    }

    return result;
};