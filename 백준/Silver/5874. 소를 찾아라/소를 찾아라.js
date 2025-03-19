const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const length = input.length;
const arr1 = [];
const arr2 = [];

for (let i = 0; i < length - 1; i++) {
  if (input.slice(i, i + 2) === "((") {
    arr1.push(i);
  } else if (input.slice(i, i + 2) === "))") {
    arr2.push(i);
  }
}

let answer = 0;
const length1 = arr1.length;
const length2 = arr2.length;
let index = 0;

for (let i = 0; i < length1; i++) {
  while (arr1[i] > arr2[index]) {
    index++;
  }

  answer += length2 - index;
}

console.log(answer);