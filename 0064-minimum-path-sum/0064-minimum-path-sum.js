/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row === 0 && col === 0) {
                continue;
            }

            if (row === 0) {
                grid[row][col] += grid[row][col - 1];
            } else if (col === 0) {
                grid[row][col] += grid[row - 1][col];
            } else {
                grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
            }
        }
    }

    return grid[m - 1][n - 1];
};