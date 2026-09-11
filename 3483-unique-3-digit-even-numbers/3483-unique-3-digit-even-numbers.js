/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    const numSet = new Set();

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) {
            continue;
        }

        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i === j || j === k || i === k) {
                    continue;
                }
                
                const num = digits[i] * 100 + digits[j] * 10 + digits[k];

                if (num % 2 === 0) {
                    numSet.add(num);
                }
            }
        }
    }

    console.log(numSet);

    return numSet.size;
};