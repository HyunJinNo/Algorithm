const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 우유 가게의 수, 1 <= N <= 1_000
const arr = input[1].split(" ").map(Number);
let target = 0;
let answer = 0;

arr.forEach((milk) => {
  if (milk === target) {
    target = (target + 1) % 3;
    answer++;
  }
});

console.log(answer);