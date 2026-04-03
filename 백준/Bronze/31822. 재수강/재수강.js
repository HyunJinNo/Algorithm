const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const target = input[0].slice(0, 5);
const N = Number(input[1]);
let answer = 0;

for (let i = 2; i < 2 + N; i++) {
  const course = input[i].slice(0, 5);

  if (target === course) {
    answer++;
  }
}

console.log(answer);