/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let answer = 0;

    for (let i = 0; i < 32; i++) {
        if ((n >> i) & 1 === 1) {
            answer++;
        }
    }

    return answer;
};