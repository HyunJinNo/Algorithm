/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        count += Math.floor(i / 8) + 1;
    }

    return count;
};