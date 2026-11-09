/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const answer = [];

    for (let num = 1; num <= n; num++) {
        if (num % 15 === 0) {
            answer.push("FizzBuzz");
        } else if (num % 3 === 0) {
            answer.push("Fizz");
        } else if (num % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(num.toString());
        }
    }

    return answer;
};