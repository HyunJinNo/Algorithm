const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 구슬의 개수, 3 <= N <= 1_000
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000_000
arr.sort((a, b) => a - b);

console.log(2 * (arr[N - 1] - arr[0]));
