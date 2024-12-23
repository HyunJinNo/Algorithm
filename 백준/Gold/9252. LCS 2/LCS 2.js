const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const str1 = input[0].trim();
const str2 = input[1].trim();
const length1 = str1.length;
const length2 = str2.length;
const arr = Array.from(Array(length1 + 1), () => Array(length2 + 1).fill(0));

for (let i = 1; i <= length1; i++) {
  for (let j = 1; j <= length2; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      arr[i][j] = arr[i - 1][j - 1] + 1;
    } else {
      arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
    }
  }
}

if (arr[length1][length2] === 0) {
  console.log(0);
} else {
  console.log(arr[length1][length2]);
  let answer = "";

  let row = length1;
  let col = length2;

  while (arr[row][col] !== 0) {
    if (arr[row][col] === arr[row - 1][col]) {
      row--;
    } else if (arr[row][col] === arr[row][col - 1]) {
      col--;
    } else {
      answer = str1[row - 1] + answer;
      row--;
      col--;
    }
  }

  console.log(answer);
}
