const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

if (input[0] === "1" && input[1] === "0") {
  console.log(10 + Number(input.trim().slice(2)));
} else {
  console.log(Number(input[0]) + Number(input.trim().slice(1)));
}
