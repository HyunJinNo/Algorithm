const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [N, A, B] = input.split(" ").map(Number);

if (A < B) {
  console.log("Bus");
} else if (A > B) {
  console.log("Subway");
} else {
  console.log("Anything");
}
