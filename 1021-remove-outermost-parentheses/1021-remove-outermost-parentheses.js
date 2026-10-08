/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let answer = "";
    let count = 0;

    for (const c of s) {
        if (c === "(") {
            if (count > 0) {
                answer += "(";
            }
            count++;
        } else { // c === ")"
            count--;
            if (count > 0) {
                answer += ")";
            }
        }
    }

    return answer;
};