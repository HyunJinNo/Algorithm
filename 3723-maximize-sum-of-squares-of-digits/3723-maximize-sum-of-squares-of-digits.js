/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function (num, sum) {
    if (num * 9 < sum) {
        return "";
    }

    let answer = "";

    for (let i = 0; i < num; i++) {
        const digit = Math.min(9, sum);
        answer += digit.toString();
        sum -= digit;
    }

    return answer;
};