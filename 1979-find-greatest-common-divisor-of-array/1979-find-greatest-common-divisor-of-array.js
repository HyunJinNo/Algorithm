/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let minNum = 1000;
    let maxNum = 1;

    for (const num of nums) {
        minNum = Math.min(minNum, num);
        maxNum = Math.max(maxNum, num);
    }

    return gcd(minNum, maxNum);
};

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}