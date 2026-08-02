/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    const solution = (left, right, turn) => {
        if (left > right) {
            return [0, 0];
        }

        let result = [0, 0];

        if (turn === 0) {
            const result1 = solution(left + 1, right, 1);
            result1[0] += nums[left];

            const result2 = solution(left, right - 1, 1);
            result2[0] += nums[right];

            if (result1[0] > result2[0]) {
                result = result1;
            } else {
                result = result2;
            }
        } else { // turn === 1
            const result1 = solution(left + 1, right, 0);
            result1[1] += nums[left];

            const result2 = solution(left, right - 1, 0);
            result2[1] += nums[right];

            if (result1[1] > result2[1]) {
                result = result1;
            } else {
                result = result2;
            }
        }

        return result;
    }

    const result = solution(0, nums.length - 1, 0);
    return result[0] >= result[1];
};
