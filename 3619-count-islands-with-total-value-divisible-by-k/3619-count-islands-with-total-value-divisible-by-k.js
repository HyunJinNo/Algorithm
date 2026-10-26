/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
    let answer = 0;

    const solution = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return 0;
        } else if (grid[row][col] === 0) {
            return 0;
        }

        const num = grid[row][col];
        grid[row][col] = 0;

        return num + solution(row - 1, col) + solution(row + 1, col) + solution(row, col - 1) + solution(row, col + 1);
    };

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] !== 0) {
                const sum = solution(row, col);

                if (sum % k === 0) {
                    answer++;
                }
            }
        }
    }

    return answer;
};