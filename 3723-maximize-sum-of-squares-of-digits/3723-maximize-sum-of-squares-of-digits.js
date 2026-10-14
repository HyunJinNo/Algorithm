/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num, sum) {
    if (num * 9 < sum) {
        return "";
    }

    const arr = [];

    for (let i = 0; i < num; i++) {
        const digit = Math.min(9, sum);
        arr.push(digit.toString());
        sum -= digit;
    }

    return arr.join("");
};