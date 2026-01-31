const { start } = require("repl");

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 개수, 1 <= T <= 50
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  const N = Number(input[index++]); // 카드의 개수, 1 <= N <= 1_000
  const arr = input[index++].split(" ").map(Number); // 카드에 적힌 수, 1 <= arr[i] <= 10_000
  const cache = Array.from({ length: N }, () => Array(N).fill(-1));

  const findAnswer = (startIndex, endIndex) => {
    if (startIndex === endIndex) {
      return arr[startIndex];
    } else if (startIndex + 1 === endIndex) {
      return Math.max(arr[startIndex], arr[endIndex]);
    } else if (cache[startIndex][endIndex] !== -1) {
      return cache[startIndex][endIndex];
    }

    // startIndex 쪽 카드를 뽑는 경우
    const case1 =
      arr[startIndex] + Math.min(findAnswer(startIndex + 2, endIndex), findAnswer(startIndex + 1, endIndex - 1));

    // endIndex 쪽 카드를 뽑는 경우
    const case2 =
      arr[endIndex] + Math.min(findAnswer(startIndex + 1, endIndex - 1), findAnswer(startIndex, endIndex - 2));

    cache[startIndex][endIndex] = Math.max(case1, case2);
    return cache[startIndex][endIndex];
  };

  answer += `${findAnswer(0, N - 1)}\n`;
}

console.log(answer.trim());