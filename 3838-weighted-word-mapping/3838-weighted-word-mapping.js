/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let answer = "";

    for (let word of words) {
        let sum = 0;

        for (let i = 0; i < word.length; i++) {
            sum += weights[word.charCodeAt(i) - "a".charCodeAt(0)];
        }

        sum %= 26;
        answer += String.fromCharCode("z".charCodeAt(0) - sum);
    }

    return answer;
};