const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 센서의 개수, 1 <= N <= 10_000
const K = Number(input[1]); // 집중국의 개수, 1 <= K <= 1_000
const arr = input[2].split(" ").map(Number); //
arr.sort((a, b) => a - b);

const distance = [];

for (let i = 1; i < N; i++) {
  distance.push(arr[i] - arr[i - 1]);
}

distance.sort((a, b) => a - b);

for (let iter = 0; iter < K - 1; iter++) {
  distance.pop();
}

console.log(distance.reduce((total, current) => total + current, 0));