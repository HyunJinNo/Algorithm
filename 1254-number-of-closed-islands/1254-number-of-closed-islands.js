/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    let answer = 0;

    const solution = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return 0;
        } else if (grid[row][col] === 1) {
            return 1;
        } 

        grid[row][col] = 1;

        return solution(row - 1, col) & solution(row + 1, col) & solution(row, col - 1) & solution(row, col + 1);
    };

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 0) {
                answer += solution(row, col);
            }
        }
    }

    return answer;
};