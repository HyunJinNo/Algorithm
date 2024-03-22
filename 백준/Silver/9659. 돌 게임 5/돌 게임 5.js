const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString();
const n = Number(input);

if (n % 2 == 1) {
  console.log("SK");
} else {
  console.log("CY");
}