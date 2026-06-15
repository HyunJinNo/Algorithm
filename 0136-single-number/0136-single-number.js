/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer = 0;

    for (let num of nums) {
        answer ^= num;
    }

    return answer;
};