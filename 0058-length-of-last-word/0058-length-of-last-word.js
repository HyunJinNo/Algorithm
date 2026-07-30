/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let endIndex = s.length - 1;

    while (endIndex >= 0 && s[endIndex] === " ") {
        endIndex--;
    }

    let answer = 0;

    for (let i = endIndex; i >= 0; i--) {
        if (s[i] === " ") {
            break;
        }

        answer++;
    }

    return answer;
};