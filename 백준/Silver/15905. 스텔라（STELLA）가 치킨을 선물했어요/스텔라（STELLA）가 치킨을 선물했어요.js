const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const N = Number(input[0]); // 참가자의 수, 5 <= N <= 66
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return b[0] - a[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = 0;

for (let i = 5; i < N; i++) {
  if (arr[4][0] !== arr[i][0]) {
    break;
  }

  answer++;
}

console.log(answer);