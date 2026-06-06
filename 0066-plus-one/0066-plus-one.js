/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const length = digits.length;
    const arr = digits;
    arr[length - 1]++;

    for (let i = length - 1; i >= 0; i--) {
        if (arr[i] === 10) {
            arr[i] = 0;
            
            if (i === 0) {
                arr.unshift(1);
            } else {
                arr[i - 1]++;
            }
        } else {
            break;
        }
    }

    return arr;
};