/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let answer = -1;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let sum = 0;

        while (num > 0) {
            sum += (num % 10);
            num = Math.floor(num / 10);
        }

        if (sum === i) {
            answer = i;
            break;
        }
    }

    return answer;
};