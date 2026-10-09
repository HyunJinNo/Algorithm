/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    let answer = 0;
    let index = 0;
    let count = 0;

    while (index < s.length) {
        if (s[index] === "(") {
            count++;
        } else { // s[index] === ")"
            if (count === 0) {
                answer++;

                if (index + 1 < s.length && s[index + 1] === ")") {
                    index++;
                } else {
                    answer++;
                }
            } else {
                count--;

                if (index + 1 < s.length && s[index + 1] === ")") {
                    index++;
                } else {
                    answer++;
                }
            }
        }

        index++;
    }

    return answer + (count * 2);
};