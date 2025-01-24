const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 1 <= N <= 10
const P = input[1].split(" ").map(Number); // 1 <= P[i] <= 50
const M = Number(input[2]); // 준비한 금액, 1 <= M <= 50
const cache = Array.from({ length: M + 1 }, () => Array(N).fill(BigInt(-1)));
let answer = 0;

/**
 *
 * @param {number} money 남은 금액
 * @param {BigInt} currentNum 현재 숫자
 * @param {number} index 배열의 인덱스
 */
const solve = (money, currentNum, index) => {
  if (index < 0) {
    return;
  }

  if (cache[money][index] >= currentNum) {
    return;
  }

  cache[money][index] = currentNum;
  if (currentNum > answer) {
    answer = currentNum;
  }

  if (P[index] <= money) {
    solve(money - P[index], currentNum * 10n + BigInt(index), index);
  }
  solve(money, currentNum, index - 1);
};

solve(M, 0n, N - 1);
console.log(answer.toString());
