/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        return myPow(1 / x, -n);
    } else if (n === 0) {
        return 1;
    } else if (n === 1) {
        return x;
    } else {
        if (n % 2 === 0) {
            const value = myPow(x, n / 2);
            return value * value;
        } else {
            const value = myPow(x, (n - 1) / 2);
            return value * value * x;
        }
    }
};