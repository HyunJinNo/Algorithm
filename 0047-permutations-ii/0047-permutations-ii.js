/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const visited = new Int8Array(nums.length).fill(false);
    const result = [];
    const set = new Set();

    const solution = (count, str) => {
        if (count === nums.length) {
            if (set.has(str.trim())) {
                return;
            }

            set.add(str.trim());
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