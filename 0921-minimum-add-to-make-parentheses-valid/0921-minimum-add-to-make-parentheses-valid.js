/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let answer = 0;
    let count = 0;

    for (const c of s) {
        if (c === "(") {
            count++;
        } else { // c === ")"
            if (count === 0) {
                answer++;
            } else {
                count--;
            }
        }
    }

    return answer + count;
};