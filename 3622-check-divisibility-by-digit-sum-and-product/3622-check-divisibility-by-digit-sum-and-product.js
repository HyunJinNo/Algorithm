/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    const arr = n.toString().split("").map(Number);
    let sum = 0;
    let product = 1;

    for (let num of arr) {
        sum += num;
        product *= num;
    }

    return n % (sum + product) === 0;
};