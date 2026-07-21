/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const str1 = a.split("").reverse().join("");
    const str2 = b.split("").reverse().join("");
    let carry = 0;
    let result = "";

    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        const sum = carry + Number(str1[i] ?? 0) + Number(str2[i] ?? 0);

        result += (sum % 2).toString();
        carry = Math.floor(sum / 2);
    }

    if (carry === 1) {
        result += "1";
    }

    return result.split("").reverse().join("");
};