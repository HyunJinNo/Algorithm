/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let startIndex = 0;
    let endIndex = 0;
    const set = new Set();

    while (endIndex < s.length) {
        while (set.has(s[endIndex])) {
            set.delete(s[startIndex++]);
        }

        set.add(s[endIndex++]);
        answer = Math.max(answer, set.size);
    }

    return answer;
};