/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let answer = true;
    const stack = [];

    loop: for (const c of s) {
        switch (c) {
            case "(":
            case "{":
            case "[":
                stack.push(c);
                break;
            case ")":
                if (stack.pop() !== "(") {
                    answer = false;
                    break loop;
                }
                break;
            case "}":
                if (stack.pop() !== "{") {
                    answer = false;
                    break loop;
                }
                break;
            case "]":
                if (stack.pop() !== "[") {
                    answer = false;
                    break loop;
                }
                break;
        }
    }


    return stack.length === 0 ? answer : false;
};