const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const n = Number(input[0]); // 1 <= n <= 1_000
const arr = input[1].split(" ").map(Number);
let result = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === 1) {
    result++;
  } else if (arr[i] === -1) {
    result--;
  }
}

if (result > 0) {
  console.log("Right");
} else if (result === 0) {
  console.log("Stay");
} else {
  console.log("Left");
}
