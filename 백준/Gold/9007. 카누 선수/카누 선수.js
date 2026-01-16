const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수
let answer = "";
let index = 1;

for (let iter = 0; iter < T; iter++) {
  // k: 보트의 특정 값, 1 <= k <= 40_000_000
  // n: 각 반의 학생수, 1 <= n <= 1_000
  const [k, n] = input[index++].split(" ").map(Number);
  const arr1 = new Int32Array(input[index++].split(" ").map(Number)); // 1 <= arr1[i] <= 10_000_000
  const arr2 = new Int32Array(input[index++].split(" ").map(Number)); // 1 <= arr2[i] <= 10_000_000
  const arr3 = new Int32Array(input[index++].split(" ").map(Number)); // 1 <= arr3[i] <= 10_000_000
  const arr4 = new Int32Array(input[index++].split(" ").map(Number)); // 1 <= arr4[i] <= 10_000_000

  const leftSums = new Int32Array(n * n);
  const rightSums = new Int32Array(n * n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      leftSums[i * n + j] = arr1[i] + arr2[j];
      rightSums[i * n + j] = arr3[i] + arr4[j];
    }
  }

  rightSums.sort((a, b) => a - b);
  let closest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < leftSums.length; i++) {
    let left = 0;
    let right = rightSums.length - 1;

    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if (leftSums[i] + rightSums[mid] < k) {
        left = mid;
      } else {
        right = mid;
      }
    }

    if (Math.abs(k - (leftSums[i] + rightSums[left])) < Math.abs(k - closest)) {
      closest = leftSums[i] + rightSums[left];
    } else if (
      Math.abs(k - (leftSums[i] + rightSums[left])) === Math.abs(k - closest) &&
      leftSums[i] + rightSums[left] < closest
    ) {
      closest = leftSums[i] + rightSums[left];
    }

    if (Math.abs(k - (leftSums[i] + rightSums[right])) < Math.abs(k - closest)) {
      closest = leftSums[i] + rightSums[right];
    } else if (
      Math.abs(k - (leftSums[i] + rightSums[right])) === Math.abs(k - closest) &&
      leftSums[i] + rightSums[right] < closest
    ) {
      closest = leftSums[i] + rightSums[right];
    }
  }

  answer += `${closest}\n`;
}

console.log(answer.trim());