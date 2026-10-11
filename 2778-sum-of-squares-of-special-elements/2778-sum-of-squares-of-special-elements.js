/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    const n = nums.length; // 1 <= n <= 50
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += nums[i - 1] * nums[i - 1];
        }
    }

    return answer;
};