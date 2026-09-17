/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const answer = [];
    candidates.sort((a, b) => a - b);

    const solution = (index, arr, sum) => {
        if (sum === target) {
            answer.push([...arr]);
            return;
        } 
        
        if (index >= candidates.length) {
            return;           
        } 
        
        if (sum < target) {
            arr.push(candidates[index]);
            solution(index + 1, arr, sum + candidates[index]);
            arr.pop();

            for (let i = index + 1; i < candidates.length; i++) {
                if (candidates[i] !== candidates[i - 1]) {
                    solution(i, arr, sum);
                    break;
                }
            }
        }
    };

    solution(0, [], 0);

    return answer;
};