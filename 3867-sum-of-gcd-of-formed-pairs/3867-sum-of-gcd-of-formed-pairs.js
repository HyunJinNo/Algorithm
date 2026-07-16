/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
    const n = nums.length; // 1 <= n <= 100_000
    const prefixGcd = Array(n);
    let max = 0;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        prefixGcd[i] = gcd(max, nums[i]);
    }

    prefixGcd.sort((a, b) => a - b);

    let result = 0;
    let startIndex = 0;
    let endIndex = n - 1;

    while (startIndex < endIndex) {
        result += gcd(prefixGcd[startIndex++], prefixGcd[endIndex--]);
    }

    return result;
};

const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
}