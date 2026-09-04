/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    const n = nums.length; // 1 <= n <= 100
    const maxNum = Array(n);
    const minNum = Array(n);

    maxNum[0] = nums[0];
    minNum[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        maxNum[i] = Math.max(maxNum[i - 1], nums[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        minNum[i] = Math.min(minNum[i + 1], nums[i]);
    }

    let answer = -1;

    for (let i = 0; i < n; i++) {
        if (maxNum[i] - minNum[i] <= k) {
            answer = i;
            break;
        }
    }

    return answer;
};