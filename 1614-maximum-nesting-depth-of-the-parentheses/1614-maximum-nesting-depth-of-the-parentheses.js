/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let answer = 0;
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            depth++;
            answer = Math.max(answer, depth);
        } else if (s[i] === ")") {
            depth--;
        }
    }

    return answer;
};