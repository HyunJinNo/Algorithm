/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);
    const rank = new Map();
    uniqueSortedArr.forEach((value, index) => rank.set(value, index + 1));

    return arr.map((value, index) => rank.get(value));
};