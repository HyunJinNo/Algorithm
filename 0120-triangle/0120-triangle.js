/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for (let row = 1; row < triangle.length; row++) {
        for (let col = 0; col < triangle[row].length; col++) {
            triangle[row][col] += Math.min(triangle[row - 1][col - 1] ?? Infinity, triangle[row - 1][col] ?? Infinity);
        }
    }

    return Math.min(...triangle[triangle.length - 1]);
};