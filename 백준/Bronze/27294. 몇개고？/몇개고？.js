const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [T, S] = input.split(" ").map(Number);

if (T >= 12 && T <= 16 && S === 0) {
  console.log(320);
} else {
  console.log(280);
}
