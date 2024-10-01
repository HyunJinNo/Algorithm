const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input[0]);

if (N === 0) {
  console.log("YONSEI");
} else {
  console.log("Leading the Way to the Future");
}
