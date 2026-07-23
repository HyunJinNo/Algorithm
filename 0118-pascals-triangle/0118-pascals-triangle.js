/**
 * @param {number} numRows // 1 <= numRows <= 30
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = [[1]];

    for (let row = 1; row < numRows; row++) {
        triangle.push(Array(row + 1));

        for (let col = 0; col < row + 1; col++) {
            if (col === 0 || col === row) {
                triangle[row][col] = 1;
            } else {
                triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
            }
        }
    }

    return triangle;
};