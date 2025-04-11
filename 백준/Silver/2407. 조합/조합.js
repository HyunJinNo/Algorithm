const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

// 5 <= m <= n <= 100
const [n, m] = input.split(" ").map(BigInt);

let answer = 1n;

for (let num = n; num > n - m; num--) {
  answer *= num;
}

for (let num = m; num > 0; num--) {
  answer /= num;
}

console.log(answer.toString());
