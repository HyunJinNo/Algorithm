const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString();
const n = Number(input);

const arr = Array(n + 1).fill(false);
arr[1] = false;
arr[2] = true;
arr[3] = false;
arr[4] = true;

for (let i = 5; i <= n; i++) {
  arr[i] = !(arr[i - 1] && arr[i - 3] && arr[i - 4]);
}

if (arr[n]) {
  console.log("SK");
} else {
  console.log("CY");
}