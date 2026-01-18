const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

// N: 해결한 문제 수, 1 <= N <= 130_000
// U: 유니온 레벨, 1 <= U <= 12_500
// L: 최고 레벨, 1 <= L <= 300
const [N, U, L] = input.split(" ").map(Number);

if (N >= 1000) {
  if (U >= 8000 || L >= 260) {
    console.log("Very Good");
  } else {
    console.log("Good");
  }
} else {
  console.log("Bad");
}