const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const A = Number(input[0]);
const B = Number(input[1]);

if (A > B) {
  console.log(1);
} else if (A === B) {
  console.log(0);
} else {
  console.log(-1);
}
