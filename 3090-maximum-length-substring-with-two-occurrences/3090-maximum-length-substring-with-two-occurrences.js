/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    const n = s.length; // 2 <= n <= 100
    let answer = 0;
    let left = 0;
    const freq = new Map();

    for (let right = 0; right < n; right++) {
        const c = s[right];
        freq.set(c, (freq.get(c) ?? 0) + 1);

        while (freq.get(c) > 2) {
            freq.set(s[left], (freq.get(s[left]) ?? 0) - 1);
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};