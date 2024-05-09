const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

// D: TV의 대각선 길이, 5 <= D <= 1_000
// H: TV의 높이 비율, 1 <= H <= 99
// W: TV의 너비 비율, 2 <= W <= 100
const [D, H, W] = input.split(" ").map(Number);

const temp = Math.sqrt((D * D) / (H * H + W * W));
console.log(`${Math.floor(temp * H)} ${Math.floor(temp * W)}`);
