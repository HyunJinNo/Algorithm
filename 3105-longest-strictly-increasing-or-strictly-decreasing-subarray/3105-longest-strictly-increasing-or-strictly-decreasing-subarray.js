/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let answer = 1;
    let currentNum = nums[0];
    let upCount = 1;
    let downCount = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentNum) {
            upCount++;
        } else {
            upCount = 1;
        }


        if (nums[i] < currentNum) {
            downCount++;
        } else {
            downCount = 1;
        }

        answer = Math.max(answer, upCount, downCount);
        currentNum = nums[i]
    }

    return answer;
};