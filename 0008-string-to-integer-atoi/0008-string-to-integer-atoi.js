/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let index = 0;
    let sign = 1;
    let num = 0;

    // Whitespace
    while (index < s.length && s[index] === " ") {
        index++;
    }

    // Signedness
    if (s[index] === "-") {
        sign = -1;
        index++;
    } else if (s[index] === "+") {
        index++;
    }

    // Conversion
    loop: while (index < s.length) {
        switch (s[index]) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                num *= 10;
                num += Number(s[index++]);
                break;
            default:
                break loop;
        }
    }

    num *= sign;

    // Rounding
    if (num < -Math.pow(2, 31)) {
        num = -Math.pow(2, 31);
    } else if (num > Math.pow(2, 31) - 1) {
        num = Math.pow(2, 31) - 1;
    }

    return num;
};