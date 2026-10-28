/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let answer = -10_000;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        answer = Math.max(answer, sum);

        if (sum < 0) {
            sum = 0;
        }
    }

    return answer;
};