/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    const numSet = new Set(nums);
    let num = k;

    while (numSet.has(num)) {
        num += k;
    }

    return num;
};