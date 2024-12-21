const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const str1 = input[0].trim();
const str2 = input[1].trim();
const length1 = str1.length;
const length2 = str2.length;
const arr = Array.from(Array(length1 + 1), () => Array(length2 + 1).fill(0));
let answer = 0;

for (let i = 1; i <= length1; i++) {
  for (let j = 1; j <= length2; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      arr[i][j] = arr[i - 1][j - 1] + 1;
    } else {
      arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
    }

    answer = Math.max(answer, arr[i][j]);
  }
}

console.log(answer);
