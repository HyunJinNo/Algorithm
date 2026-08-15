/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
    const n = nums.length; // 1 <= n <= 100_000
    let totalXor = 0;
    let isAllZero = true;

    for (const num of nums) {
        totalXor ^= num;

        if (num > 0) {
            isAllZero = false;
        }
    }

    if (totalXor > 0) {
        return n;
    }

    return isAllZero ? 0 : n - 1;
};