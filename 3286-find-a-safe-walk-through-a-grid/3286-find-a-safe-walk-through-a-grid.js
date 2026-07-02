/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length; // 1 <= m <= 50
    const n = grid[0].length; // 1 <= n <= 50

    const arr = Array.from({ length: m }, () => new Int8Array(n).fill(0));
    arr[0][0] = health - grid[0][0];

    if (arr[0][0] <= 0) {
        return false;
    }
    
    const queue = [[0, 0]];
    let queueIndex = 0;

    while (queue.length > queueIndex) {
        const [row, col] = queue[queueIndex++];
        const currentHealth = arr[row][col];

        if (row === m - 1 && col === n - 1) {
            return arr[m - 1][n - 1] > 0;
        }

        if (row - 1 >= 0 && currentHealth - grid[row - 1][col] > arr[row - 1][col]) {
            queue.push([row - 1, col]);
            arr[row - 1][col] = currentHealth - grid[row - 1][col];
        }

        if (row + 1 < m && currentHealth - grid[row + 1][col] > arr[row + 1][col]) {
            queue.push([row + 1, col]);
            arr[row + 1][col] = currentHealth - grid[row + 1][col];
        }

        if (col - 1 >= 0 && currentHealth - grid[row][col - 1] > arr[row][col - 1]) {
            queue.push([row, col - 1]);
            arr[row][col - 1] = currentHealth - grid[row][col - 1];
        }

        if (col + 1 < n && currentHealth - grid[row][col + 1] > arr[row][col + 1]) {
            queue.push([row, col + 1]);
            arr[row][col + 1] = currentHealth - grid[row][col + 1];
        }
    }

    return arr[m - 1][n - 1] > 0;
};