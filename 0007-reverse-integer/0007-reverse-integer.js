/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;

    if (x < 0) {
        result = -1 * Number(x.toString().slice(1).split("").reverse().join(""));
    } else {
        result = Number(x.toString().split("").reverse().join(""));
    }

    if (result > Math.pow(2, 31) - 1 || result < -1 * Math.pow(2, 31)) {
        return 0;
    } else {
        return result;
    }
};