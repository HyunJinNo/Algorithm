/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const arr = n.toString().split("").map(Number);
    arr.sort((a, b) => b - a);

    return arr[0] * arr[1];
};