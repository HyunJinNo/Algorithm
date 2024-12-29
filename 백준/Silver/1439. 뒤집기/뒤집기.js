const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const arr = [0, 0];
const length = input.length;
let startIndex = 0;
let endIndex = 0;

while (endIndex < length) {
  if (input[startIndex] === input[endIndex]) {
    endIndex++;
  } else {
    arr[Number(input[startIndex])]++;
    startIndex = endIndex;
  }
}

arr[Number(input[startIndex])]++;

console.log(Math.min(arr[0], arr[1]));
