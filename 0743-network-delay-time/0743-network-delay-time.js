/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    const arr = Array(n + 1).fill(Infinity);
    arr[0] = 0;
    arr[k] = 0;

    for (let iter = 0; iter < n; iter++) {
        for (const [source, target, time] of times) {
            arr[target] = Math.min(arr[target], arr[source] + time);
        }
    }

    const result = Math.max(...arr);
    return result === Infinity ? -1 : result;
};