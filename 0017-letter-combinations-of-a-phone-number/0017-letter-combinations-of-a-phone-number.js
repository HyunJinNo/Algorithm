/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const digitToLetter = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const answer = [];

    const solution = (index, combination) => {
        if (index === digits.length) {
            answer.push(combination);
            return;
        }

        for (const letter of digitToLetter[digits[index]]) {
            solution(index + 1, combination + letter);
        }
    };

    solution(0, "");

    return answer;
}