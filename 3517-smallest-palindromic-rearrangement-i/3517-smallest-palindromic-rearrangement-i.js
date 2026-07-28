/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const arr = Array(26).fill(0);

    for (const c of s) {
        arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let left = "";
    let middle = "";

    for (let i = 0; i < 26; i++) {
        left += String.fromCharCode('a'.charCodeAt(0) + i).repeat(Math.floor(arr[i] / 2));

        if (arr[i] % 2 === 1) {
            middle = String.fromCharCode('a'.charCodeAt(0) + i);
        }
    }

    const right = left.split("").reverse().join("");

    return left + middle + right;
};