/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let answer = Number.MAX_SAFE_INTEGER;
    const map = new Map();

    for (let c of text) {
        map.set(c, (map.get(c) ?? 0) + 1);
    }

    answer = Math.min(
        answer,
        map.get("b") ?? 0,
        map.get("a") ?? 0,
        Math.floor((map.get("l") ?? 0) / 2),
        Math.floor((map.get("o") ?? 0) / 2),
        map.get("n") ?? 0);

    return answer;
};