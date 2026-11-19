/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
    nums.sort((a, b) => a - b);

    return Math.min(
        nums[nums.length - 1] - nums[2],
        nums[nums.length - 3] - nums[0],
        nums[nums.length - 2] - nums[1]
    );
};