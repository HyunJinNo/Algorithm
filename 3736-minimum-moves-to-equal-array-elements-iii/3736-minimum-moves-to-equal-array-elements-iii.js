/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const maxNum = Math.max(...nums);
    let answer = 0;

    for (const num of nums) {
        answer += maxNum - num;
    }

    return answer;
};