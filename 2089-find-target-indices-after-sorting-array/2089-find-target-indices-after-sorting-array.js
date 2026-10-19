/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let less = 0;
    let equal = 0;
    const answer = [];

    for (const num of nums) {
        if (num < target) {
            less++;
        } else if (num === target) {
            equal++;
        }
    }

    for (let i = less; i < less + equal; i++) {
        answer.push(i);
    }

    return answer;
};