/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [];
    const numStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            numStack.push(0);
        } else if (s[i] === ")") {
            const temp = [];

            for (let iter = numStack.pop(); iter > 0; iter--) {
                numStack[numStack.length - 1]++;
                temp.push(stack.pop());
            }

            for (let letter of temp) {
                stack.push(letter);
            }
        } else {
            stack.push(s[i]);
            numStack[numStack.length - 1]++;
        }
    }

    return stack.join("");
};