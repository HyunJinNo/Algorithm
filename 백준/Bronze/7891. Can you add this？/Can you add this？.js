const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 100

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].trim().split(" ").map(Number);
  console.log(a + b);
}
