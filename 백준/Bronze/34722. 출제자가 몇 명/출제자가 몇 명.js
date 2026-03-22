const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const N = Number(input[0]); // 사람의 수, 1 <= N <= 100
let answer = 0;

for (let i = 1; i <= N; i++) {
  const [s, c, a, r] = input[i].split(" ").map(Number);

  if (s >= 1000 || c >= 1600 || a >= 1500 || (r <= 30 && r !== -1)) {
    answer++;
  }
}

console.log(answer);