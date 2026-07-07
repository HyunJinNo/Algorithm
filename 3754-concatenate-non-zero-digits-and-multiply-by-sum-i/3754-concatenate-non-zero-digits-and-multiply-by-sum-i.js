/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let x = "";
    let sum = 0;
    const str = n.toString();

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0") {
            x += str[i];
            sum += Number(str[i]);
        }
    }

    if (x === "") {
        return 0;
    } else {
        return Number(x) * sum;
    }
};