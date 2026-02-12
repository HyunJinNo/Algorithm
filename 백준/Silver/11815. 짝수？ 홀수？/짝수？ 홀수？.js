const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 전체 테스트 개수, 1 <= N <= 100
const arr = input[1].split(" ").map(BigInt);
let answer = "";

/**
 * @param {bigint} value
 */
const sqrtBigInt = (value) => {
  if (value < 2n) {
    return value;
  }

  let left = 1n;
  let right = value;

  while (left <= right) {
    const mid = (left + right) / 2n;
    const square = mid * mid;

    if (square === value) {
      return mid;
    } else if (square < value) {
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }

  return right;
};

for (let i = 0; i < N; i++) {
  const num = arr[i];
  const square = sqrtBigInt(num);

  if (square * square === num) {
    answer += "1 ";
  } else {
    answer += "0 ";
  }
}

console.log(answer.trim());