const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

// x0: 변환할 자연수, 1 <= x0 <= 10^16
// N: 변환 횟수, 1 <= N <= 50
const [x0, N] = input.split(" ").map(Number);
const answer = [];
let binaryNumStr = x0.toString(2);

for (let iter = 0; iter < N; iter++) {
  if (binaryNumStr === "0") {
    console.log(-1);
    process.exit(0);
  }

  if (iter === N - 1) {
    answer.push(0);
  } else {
    if (binaryNumStr === "1") {
      answer.push(0);
      binaryNumStr = "0";
    } else {
      const x = parseInt(binaryNumStr.slice(1), 2);
      answer.push(x);
      binaryNumStr = x.toString(2);
    }
  }
}

console.log(answer.toString().replaceAll(",", " "));