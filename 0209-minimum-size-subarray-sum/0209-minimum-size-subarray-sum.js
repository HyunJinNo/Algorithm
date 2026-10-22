/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let answer = Infinity;
    let sum = 0;
    let startIndex = 0;
    let endIndex = 0;

    while (endIndex < nums.length) {
        sum += nums[endIndex++];

        while (sum >= target) {
            answer = Math.min(answer, endIndex - startIndex);
            sum -= nums[startIndex++];
        }
    }

    return answer === Infinity ? 0 : answer;
};