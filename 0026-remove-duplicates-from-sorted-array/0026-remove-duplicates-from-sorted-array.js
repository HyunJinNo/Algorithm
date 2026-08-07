/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let answer = 1;
    let index = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            answer++;
            nums[index++] = nums[i];
        }
    }

    return answer;
};