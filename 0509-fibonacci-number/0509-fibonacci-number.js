/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    const arr = Array(n + 1).fill(0);
    arr[1] = 1;

    for (let num = 2; num <= n; num++) {
        arr[num] = arr[num - 2] + arr[num - 1];
    }

    return arr[n];
};