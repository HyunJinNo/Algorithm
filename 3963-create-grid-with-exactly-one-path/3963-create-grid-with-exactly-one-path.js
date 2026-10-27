/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
    const grid = Array(m).fill(".".padStart(n, "#"));
    grid[0] = ".".repeat(n);

    return grid;
};