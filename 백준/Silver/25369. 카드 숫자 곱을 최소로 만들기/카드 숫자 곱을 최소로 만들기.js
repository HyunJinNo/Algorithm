const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 선택할 카드 개수, 1 <= n <= 7
const arr = new Int8Array(input[1].trim().split(" ").map(Number));
const num = arr.reduce((total, value) => total * value, 1);
const answer = Array(n).fill(-1);
let isFound = false;

const solve = (index) => {
  if (index === n) {
    const temp = answer.reduce((total, value) => total * value, 1);
    if (temp > num) {
      isFound = true;
    }
    return;
  }

  for (let i = 1; i <= 9; i++) {
    if (isFound) {
      return;
    }

    answer[index] = i;
    solve(index + 1);
  }
};

solve(0);
if (isFound) {
  console.log(answer.join(" "));
} else {
  console.log(-1);
}
