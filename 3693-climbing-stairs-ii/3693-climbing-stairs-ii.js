/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
    if (n === 1) {
        return costs[0] + 1;
    }

    const arr = [0, ...costs];

    arr[1] += 1;
    arr[2] += Math.min(arr[0] + 4, arr[1] + 1);

    for (let i = 3; i <= n; i++) {
        arr[i] += Math.min(arr[i - 3] + 9, arr[i - 2] + 4, arr[i - 1] + 1);
    }

    return arr[n];
};