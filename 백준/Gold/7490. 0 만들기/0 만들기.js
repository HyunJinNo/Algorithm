const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 9
let answer = "";

/**
 * @param {string[]} arr
 * @param {number} current
 * @param {number} N
 */
const findAnswer = (arr, current, N) => {
  if (current > N) {
    const str = arr.join("");
    if (parse(str) === 0) {
      answer += `${str}\n`;
    }
    return;
  }

  arr.push(" ");
  arr.push(current.toString());
  findAnswer(arr, current + 1, N);

  arr.pop();
  arr.pop();
  arr.push("+");
  arr.push(current.toString());
  findAnswer(arr, current + 1, N);

  arr.pop();
  arr.pop();
  arr.push("-");
  arr.push(current.toString());
  findAnswer(arr, current + 1, N);

  arr.pop();
  arr.pop();
};

/**
 * @param {string} str 수식
 * @returns {number} 수식 결과
 */
const parse = (str) => {
  const length = str.length;
  let result = 0;
  let operator = "+";
  let num = "0";

  for (let i = 0; i < length; i++) {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(str[i])) {
      num += str[i];
    } else if (str[i] === "+" || str[i] === "-") {
      if (operator === "+") {
        result += Number(num);
      } else if (operator === "-") {
        result -= Number(num);
      }

      num = "0";
      operator = str[i];
    }
  }

  if (operator === "+") {
    result += Number(num);
  } else if (operator === "-") {
    result -= Number(num);
  }

  return result;
};

for (let i = 1; i <= T; i++) {
  const N = Number(input[i]); // 3 <= N <= 9
  const arr = ["1"];
  findAnswer(arr, 2, N);
  answer += "\n";
}

console.log(answer.trim());
