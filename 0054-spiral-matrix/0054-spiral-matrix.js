/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const m = matrix.length; // 1 <= m <= 10
    const n = matrix[0].length; // 1 <= n <= 10
    let row = 0;
    let col = 0;
    let direction = "R";

    const answer = Array(m * n);

    for (let i = 0; i < m * n; i++) {
        answer[i] = matrix[row][col];
        matrix[row][col] = -101;

        switch (direction) {
            case "U":
                if (row - 1 >= 0 && matrix[row - 1][col] !== -101) {
                    row--;
                } else {
                    col++;
                    direction = "R";
                }
                break;
            case "D":
                if (row + 1 < m && matrix[row + 1][col] !== -101) {
                    row++;
                } else {
                    col--;
                    direction = "L";
                }
                break;
            case "L":
                if (col - 1 >= 0 && matrix[row][col - 1] !== -101) {
                    col--;
                } else {
                    row--;
                    direction = "U";
                }
                break;
            default: // case: "R"
                if (col + 1 < n && matrix[row][col + 1] !== -101) {
                    col++;
                } else {
                    row++;
                    direction = "D";
                }
                break;
        }
    }

    return answer;
};