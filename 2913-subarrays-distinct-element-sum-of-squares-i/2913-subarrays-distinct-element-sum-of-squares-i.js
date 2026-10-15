/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const n = nums.length; // 1 <= n <= 100
    let answer = 0;

    for (let i = 0; i < n; i++) {
        const numSet = new Set();
        let distinct = 0;

        for (let j = i; j < n; j++) {
            if (!numSet.has(nums[j])) {
                numSet.add(nums[j]);
                distinct++;
            }

            answer += distinct * distinct;
        }
    }

    return answer;
};