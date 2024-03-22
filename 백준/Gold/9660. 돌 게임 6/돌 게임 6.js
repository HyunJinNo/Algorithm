const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString();
const n = Number(input);

if (n % 7 == 0 || n % 7 == 2) {
  console.log("CY");
} else {
  console.log("SK");
}