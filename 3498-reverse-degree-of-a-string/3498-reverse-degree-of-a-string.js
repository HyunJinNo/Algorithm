/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        answer += ("z".charCodeAt(0) - s.charCodeAt(i) + 1) * (i + 1);
    }

    return answer;
};