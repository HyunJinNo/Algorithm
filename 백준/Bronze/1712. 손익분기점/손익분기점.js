const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const [A, B, C] = input.split(" ").map(Number);

if (B >= C) {
  console.log(-1);
} else {
  console.log(Math.floor(A / (C - B)) + 1);
}