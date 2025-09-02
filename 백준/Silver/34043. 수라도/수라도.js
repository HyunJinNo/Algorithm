const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 서로 다른 색의 개수, 1 <= N <= 100_000

if (N === 1 || N === 3) {
  console.log("NO");
} else {
  console.log("YES");
}