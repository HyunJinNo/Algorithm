/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let answer = 0;
    const minNum = Math.min(...nums);

    for (const num of nums) {
        answer += num - minNum;
    }

    return answer;
};