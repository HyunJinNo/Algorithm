const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

// n: 수열의 길이, 10 <= n <= 100,000
// s: 합, 0 <= s <= 100,000,000
const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const arrSum = Array(n).fill(0);

arrSum[0] = arr[0];
for (let i = 1; i < n; i++) {
  arrSum[i] = arr[i] + arrSum[i - 1];
}

/**
 * 시작 Index 부터 끝 Index 까지의 부분 합을 반환하는 함수
 * @param {number} a 시작 Index
 * @param {number} b 끝 Index
 * @returns {number} 부분 합
 */
const rangeSum = (a, b) => {
  if (a === 0) {
    return arrSum[b];
  } else {
    return arrSum[b] - arrSum[a - 1];
  }
}

let answer = Infinity;
let a = 0;
let b = 0;

while (b < n) {
  if (rangeSum(a, b) >= s) {
    answer = Math.min(answer, b - a + 1);
    a++;
  } else {
    b++;
  }
}

console.log(`${answer === Infinity ? 0 : answer}`);