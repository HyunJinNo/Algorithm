/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    let answer = 0;
    const median = nums[Math.floor(nums.length / 2)];

    for (const num of nums) {
        answer += Math.abs(num - median);
    }

    return answer;
};