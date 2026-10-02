/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let answer = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            count++;
        } else { // s[i] === "R"
            count--;
        }

        if (count === 0) {
            answer++;
        }
    }

    return answer;
};