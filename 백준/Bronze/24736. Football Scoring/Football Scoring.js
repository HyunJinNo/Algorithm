const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

for (let i = 0; i <= 1; i++) {
  const [T, F, S, P, C] = input[i].split(" ").map(Number);
  console.log(T * 6 + F * 3 + S * 2 + P + C * 2);
}
