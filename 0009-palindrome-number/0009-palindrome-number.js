/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const num = x.toString();
    let startIndex = 0;
    let endIndex = num.length - 1;

    while (startIndex < endIndex) {
        if (num[startIndex++] !== num[endIndex--]) {
            return false;
        }
    }

    return true;
};