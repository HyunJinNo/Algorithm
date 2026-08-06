/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let num = n;

    while (true) {
        let temp = num;
        let product = 1;

        while (temp > 0) {
            product *= temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (product % t === 0) {
            break;
        }

        num++;
    }

    return num;
};