const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 라운드의 수, 1 <= n <= 15
let answer = [100, 100];

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (a < b) {
    answer[0] -= b;
  } else if (a > b) {
    answer[1] -= a;
  }
}

console.log(answer[0]);
console.log(answer[1]);