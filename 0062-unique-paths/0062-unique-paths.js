/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const arr = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let row = 0; row < m; row++) {
        arr[row][0] = 1;
    }

    for (let col = 0; col < n; col++) {
        arr[0][col] = 1;
    }

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            arr[row][col] = arr[row - 1][col] + arr[row][col - 1];
        }
    }

    return arr[m - 1][n - 1];
};
