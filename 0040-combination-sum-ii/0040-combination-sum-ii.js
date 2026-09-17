/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const answer = [];
    candidates.sort((a, b) => a - b);
    
    console.log(candidates);

    const solution = (index, arr, sum) => {
        if (sum === target) {
            answer.push(arr);
            return;
        } 
        
        if (index >= candidates.length) {
            return;           
        } 
        
        if (sum < target) {
            solution(index + 1, [...arr, candidates[index]], sum + candidates[index]);

            for (let i = index + 1; i < candidates.length; i++) {
                if (candidates[i] !== candidates[i - 1]) {
                    solution(i, [...arr], sum);
                    break;
                }
            }
        }
    };

    solution(0, [], 0);

    return answer;
};