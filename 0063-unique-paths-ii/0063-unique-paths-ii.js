/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    const m = obstacleGrid.length; // 1 <= m <= 100
    const n = obstacleGrid[0].length; // 1 <= n <= 100
    const arr = Array.from({ length: m }, () => Array(n).fill(0));
    arr[0][0] = 1;

    for (let row = 1; row < m; row++) {
        if (obstacleGrid[row][0] === 1) {
            break;
        }
        arr[row][0] = 1;
    }

    for (let col = 1; col < n; col++) {
        if (obstacleGrid[0][col] === 1) {
            break;
        }
        arr[0][col] = 1;
    }

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            if (obstacleGrid[row][col] === 0) {
                arr[row][col] = arr[row - 1][col] + arr[row][col - 1];
            }
        }
    }

    return arr[m - 1][n - 1];
};