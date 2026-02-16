const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const arr = input.split("").map(Number);

arr.sort((a, b) => b - a);

if (arr[arr.length - 1] !== 0 || arr.reduce((total, current) => total + current, 0) % 3 !== 0) {
  console.log(-1);
} else {
  console.log(arr.join(""));
}