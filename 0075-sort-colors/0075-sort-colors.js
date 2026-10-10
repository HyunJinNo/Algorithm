/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let red = 0;
    let white = 0;

    for (const num of nums) {
        if (num === 0) {
            red++;
        } else if (num === 1) {
            white++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (red > 0) {
            nums[i] = 0;
            red--;
        } else if (white > 0) {
            nums[i] = 1;
            white--;
        } else {
            nums[i] = 2;
        }
    }
};