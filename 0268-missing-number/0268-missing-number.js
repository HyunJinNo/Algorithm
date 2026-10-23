/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length; // 1 <= n <= 10_000
    let answer = n * (n + 1) / 2;

    for (const num of nums) {
        answer -= num;
    }

    return answer;
};