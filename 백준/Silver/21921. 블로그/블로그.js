const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 블로그를 시작하고 지난 일수
// X: 기간
// 1 <= X <= N <= 250_000
const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // 0 <= arr[i] (i일차 방문자 수) <= 8_000
const sum = [arr.slice(0, X).reduce((total, current) => total + current, 0)];

for (let i = X; i < N; i++) {
  sum.push(sum[i - X] - arr[i - X] + arr[i]);
}

let answer = 0;
let count = 0;

for (let i = 0; i < sum.length; i++) {
  if (sum[i] > answer) {
    answer = sum[i];
    count = 1;
  } else if (sum[i] === answer) {
    count++;
  }
}

if (answer === 0) {
  console.log("SAD");
} else {
  console.log(answer);
  console.log(count);
}