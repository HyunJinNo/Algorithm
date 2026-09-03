/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
    let minOdd = Infinity;
    let minEven = Infinity;

    for (num of nums1) {
        if (num % 2 === 1) {
            minOdd = Math.min(minOdd, num);
        } else {
            minEven = Math.min(minEven, num);
        }
    }

    if (minOdd === Infinity || minEven === Infinity) {
        return true;
    }

    return minOdd < minEven;
};