const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 주문한 각 종류의 치킨 마릿수, 1 <= N <= 1_000
const [A, B, C] = input[1].split(" ").map(Number);

console.log(Math.min(N, A) + Math.min(N, B) + Math.min(N, C));