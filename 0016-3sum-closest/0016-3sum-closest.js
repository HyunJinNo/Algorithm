/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length; // 3 <= n <= 500
    let answer = Infinity;

    loop: for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                answer = target;
                break loop;
            } else if (sum > target) {
                right--;
            } else { // sum < target
                left++;
            }

            if (Math.abs(target - sum) < Math.abs(target - answer)) {
                answer = sum;
            }
        }
    }

    return answer;
};