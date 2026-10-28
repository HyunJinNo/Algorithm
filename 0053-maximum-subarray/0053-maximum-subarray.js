/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let answer = -10_000;
    let sum = 0;
    let startIndex = 0;
    let endIndex = 0;

    while (startIndex < nums.length && endIndex < nums.length) {
        sum += nums[endIndex++];
        answer = Math.max(answer, sum);

        if (sum < 0) {
            startIndex = endIndex;
            sum = 0;
        }
    }

    return answer;
};