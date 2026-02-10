const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 구간의 수, 1 <= N <= 25_000
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ").map(Number); // 1 <= A < B <= 2_000_000_000
  arr.push([A, B]);
}

arr.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < N; i++) {
  let result = 0;

  for (let j = i + 1; j < N; j++) {
    if (arr[i][1] < arr[j][0]) {
      break;
    } else if (arr[i][1] > arr[j][1]) {
      result++;
    }
  }

  answer = Math.max(answer, result);
}

console.log(answer);