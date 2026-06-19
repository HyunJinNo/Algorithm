/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let answer = 0;
    let currentAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        answer = Math.max(answer, currentAltitude);
    }

    return answer;
};