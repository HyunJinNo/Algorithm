const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let answer = 0;

input.forEach((str) => {
  if (str.trim() === "gum gum for jay jay") {
    answer++;
  }
});

console.log(answer);
