const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [N, M] = input.split(" ").map(Number);

if (N * 100 >= M) {
  console.log("Yes");
} else {
  console.log("No");
}
