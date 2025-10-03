const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 직선의 개수, 1 <= N <= 100
const [X, Y, R] = input[1].split(" ").map(Number); // 원의 중심 좌표 (X, Y)와 반지름 R, -100 <= X, Y <= 100, 1 <= R <= 100
let A = 0;
let B = 0;

for (let i = 2; i < 2 + N; i++) {
  const T = Number(input[i]); // -100 <= T <= 100

  if (T === X - R || T === X + R) {
    B++;
  } else if (T > X - R && T < X + R) {
    A++;
  }
}

console.log(`${A} ${B}`);