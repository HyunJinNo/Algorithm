/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let stack = [-1];
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else { // s[i] === ")"
            stack.pop();

            if (stack.length === 0) {
                stack.push(i);
            } else {
                answer = Math.max(answer, i - stack[stack.length - 1]);
            }
        }
    }

    return answer;
};