/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const visited = new Int8Array(nums.length).fill(false);
    const result = [];

    const solution = (count, str) => {
        if (count === nums.length) {
            result.push(str.trim().split(" ").map(Number));
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                solution(count + 1, `${str} ${nums[i]}`);
                visited[i] = false;
            }
        }
    }

    solution(0, "");

    return result;
};