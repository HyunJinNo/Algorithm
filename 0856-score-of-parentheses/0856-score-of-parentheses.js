/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [];

    for (const c of s) {
        if (c === "(") {
            stack.push("(");
        } else { // c === ")"
            if (stack[stack.length - 1] === "(") {
                stack.pop();
                stack.push(1);
            } else {
                let num = 0;

                while (stack[stack.length - 1] !== "(") {
                    num += stack.pop();
                }

                stack.pop();
                stack.push(num * 2);
            }
        }
    }

    return stack.reduce((total, current) => total + current, 0);
};