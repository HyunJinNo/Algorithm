/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    const n = nums.length; // 1 <= n <= 100_000
    let answer = 0;
    let left = 0;
    const freq = new Map();

    for (let right = 0; right < n; right++) {
        const num = nums[right];
        freq.set(num, (freq.get(num) ?? 0) + 1);

        while (freq.get(num) > k) {
            freq.set(nums[left], freq.get(nums[left]) - 1);
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};