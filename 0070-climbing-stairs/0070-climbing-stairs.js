/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const arr = Array(n + 1).fill(0);
    arr[0] = 1;

    for (let i = 0; i <= n - 1; i++) {
        arr[i + 1] += arr[i];
        
        if (i + 2 <= n) {
            arr[i + 2] += arr[i];
        }
    }

    return arr[n];
};