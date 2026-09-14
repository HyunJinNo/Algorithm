/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const answer = Array(rowIndex + 1);
    let num = 1;

    for (let i = 0; i <= rowIndex; i++) {
        answer[i] = num;
        num = Math.floor(num * (rowIndex - i) / (i + 1));
    }

    return answer;
};