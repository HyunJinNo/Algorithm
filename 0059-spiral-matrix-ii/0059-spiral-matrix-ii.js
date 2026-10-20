/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    let row = 0;
    let col = 0;
    let direction = "R";

    for (let num = 1; num <= n * n; num++) {
        arr[row][col] = num;

        switch (direction) {
            case "U":
                if (row - 1 >= 0 && arr[row - 1][col] === 0) {
                    row--;
                } else {
                    direction = "R";
                    col++;
                }
                break;
            case "D":
                if (row + 1 < n && arr[row + 1][col] === 0) {
                    row++;
                } else {
                    direction = "L";
                    col--;
                }
                break;
            case "L":
                if (col - 1 >= 0 && arr[row][col - 1] === 0) {
                    col--;
                } else {
                    direction = "U";
                    row--;
                }
                break;
            default: // case "R"
                if (col + 1 < n && arr[row][col + 1] === 0) {
                    col++;
                } else {
                    direction = "D";
                    row++;
                }
                break;
        }
    }

    return arr;
};