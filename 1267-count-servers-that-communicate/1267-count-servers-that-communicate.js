/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    const m = grid.length; // 1 <= m <= 250
    const n = grid[0].length; // 1 <= n <= 250
    const rowArr = Array(m).fill(0);
    const colArr = Array(n).fill(0);
    let answer = 0;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) {
                rowArr[row]++;
                colArr[col]++;
            }
        }
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1 && (rowArr[row] > 1 || colArr[col] > 1)) {
                answer++;
            }
        }
    }

    return answer;
};