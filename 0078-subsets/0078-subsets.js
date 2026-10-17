/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [];

    const solution = (arr, index) => {
        if (index === nums.length) {
            answer.push([...arr]);
            return;
        }

        arr.push(nums[index]);
        solution(arr, index + 1);

        arr.pop();
        solution(arr, index + 1);
    }

    solution([], 0);

    return answer;
};