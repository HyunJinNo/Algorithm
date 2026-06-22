/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const arr = [0, 0, 0, 0, 0];

    for (let c of text) {
        if (c === "b") {
            arr[0]++;
        } else if (c === "a") {
            arr[1]++;
        } else if (c === "l") {
            arr[2]++;
        } else if (c === "o") {
            arr[3]++;
        } else if (c === "n") {
            arr[4]++;
        }
    }

    return Math.min(arr[0], arr[1], Math.floor(arr[2] / 2), Math.floor(arr[3] / 2), arr[4]);
};