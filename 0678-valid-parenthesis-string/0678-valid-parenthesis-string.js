/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let low = 0;
    let high = 0;

    for (const c of s) {
        if (c === "(") {
            low++;
            high++;
        } else if (c === ")") {
            low--;
            high--;
        } else { // c === "*"
            low--;
            high++;
        }

        if (high < 0) {
            return false;
        }

        low = Math.max(low, 0);
    }

    return low === 0;
};