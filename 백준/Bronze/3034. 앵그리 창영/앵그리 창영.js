const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 성냥의 개수, 1 <= N <= 50
// W: 가로 크기
// H: 세로 크기
// 1 <= W, H <= 100
const [N, W, H] = input[0].trim().split(" ").map(Number);
const max = Math.sqrt(W * W + H * H);

for (let i = 1; i <= N; i++) {
  const len = Number(input[i]); // 1 <= len <= 1_000
  if (len <= max) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}
