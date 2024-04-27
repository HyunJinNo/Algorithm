const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();
const N = Number(input); // 1 <= N <= 1_000_000

let answer = "";
if (N % 2 === 0) {
  for (let i = 0; i < N; i++) {
    answer += "a";
  }
} else {
  for (let i = 0; i < Math.floor(N / 2); i++) {
    answer += "a";
  }
  answer += "b";
  for (let i = 0; i < Math.floor(N / 2); i++) {
    answer += "a";
  }
}

console.log(answer);
