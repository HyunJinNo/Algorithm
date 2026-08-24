/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const answer = [];

    const solution = (str, count1, count2) => {
        if (count1 === 0 && count2 === 0) {
            answer.push(str);
            return;
        } else if (count1 === 0) {
            solution(str + ")".repeat(count2), 0, 0);
        } else {
            if (count1 < count2) {
                solution(str + ")", count1, count2 - 1);
            }
            solution(str + "(", count1 - 1, count2);
        }
    }

    solution("", n, n);

    return answer;
};