const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 1 <= T <= 100

for (let i = 1; i <= T; i++) {
  const [V, E] = input[i].split(" ").map(Number);
  console.log(2 - V + E);
}
