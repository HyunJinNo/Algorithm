/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length; // 1 <= n <= 20
    const arr = Array.from({ length: n }, () => Array(n));

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            arr[col][n - row - 1] = matrix[row][col];
        }
    }

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            matrix[row][col] = arr[row][col];
        }
    }
};