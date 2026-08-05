/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const result = [];

    const solution = (num, depth, combination) => {
        if (depth === k) {
            result.push([...combination]);
            return;
        }

        for (let i = num; i <= n; i++) {
            combination.push(i);
            solution(i + 1, depth + 1, combination);
            combination.pop();
        }
    }

    solution(1, 0, []);

    return result;
};