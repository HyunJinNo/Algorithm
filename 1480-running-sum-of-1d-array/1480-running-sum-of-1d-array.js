/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const answer = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        answer.push(answer[i - 1] + nums[i]);
    }

    return answer;
};