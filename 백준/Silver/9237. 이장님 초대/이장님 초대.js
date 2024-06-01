const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 묘목의 수, 1 <= N <= 100_000
let t = input[1].split(" ").map(Number); // 1 <= t[i] <= 1_000_000

t.sort((a, b) => b - a); // 내림차순 정렬
t = t.map((value, index) => value + index + 2);
console.log(Math.max(...t));
