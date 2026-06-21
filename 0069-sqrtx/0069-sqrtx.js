/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) {
        return 0;
    }

    let left = 1;
    let right = x;

    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);

        if (mid * mid > x) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return left;
};