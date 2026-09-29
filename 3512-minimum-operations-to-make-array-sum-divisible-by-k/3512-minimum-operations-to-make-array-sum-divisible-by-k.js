/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const sum = nums.reduce((total, current) => total + current, 0);
    return sum % k;
};