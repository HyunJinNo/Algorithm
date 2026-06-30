/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;
    const arr = [-1, -1, -1];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            arr[0] = i;
        } else if (s[i] === "b") {
            arr[1] = i;
        } else if (s[i] === "c") {
            arr[2] = i;
        }

        count += Math.min(arr[0], arr[1], arr[2]) + 1;
    }

    return count;
};