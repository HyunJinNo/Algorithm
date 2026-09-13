/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = [];

    const solution = (index, arr, sum) => {
        if (sum === target) {
            answer.push(arr);
        } else if (index >= candidates.length) {
            return;
        } else if (sum < target) {
            solution(index, [...arr, candidates[index]], sum + candidates[index]);
            solution(index + 1, arr, sum);
        }
    };

    solution(0, [], 0);

    return answer;
};