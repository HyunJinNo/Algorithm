const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 10
let index = 1;

/**
 * @param {number} num
 * @param {Int32Array} B
 * @param {number} length
 * @returns {number}
 */
const solve = (num, B, length) => {
  let start = 0;
  let end = length - 1;

  while (start + 1 < end) {
    const mid = Math.floor((start + end) / 2);
    if (num > B[mid]) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (Math.abs(B[start] - num) <= Math.abs(B[start + 1] - num)) {
    return B[start];
  } else {
    return B[start + 1];
  }
};

for (let i = 0; i < T; i++) {
  // n: 배열 A의 길이
  // m: 배열 B의 길이
  const [n, m] = input[index++].trim().split(" ").map(Number);
  const A = new Int32Array(input[index++].trim().split(" ").map(Number));
  const B = new Int32Array(input[index++].trim().split(" ").map(Number));
  B.sort((a, b) => a - b);

  let result = 0;
  A.forEach((value) => {
    result += solve(value, B, m);
  });
  console.log(result);
}
