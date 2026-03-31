const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 지폐의 개수, 1 <= N <= 100
let answer = 0;

for (let i = 1; i <= N; i++) {
  // A: 가로의 길이
  // B: 세로의 길이
  const [A, B] = input[i].split(" ").map(Number);

  switch (A) {
    case 136:
      answer += 1000;
      break;
    case 142:
      answer += 5000;
      break;
    case 148:
      answer += 10000;
      break;
    case 154:
      answer += 50000;
      break;
    default:
      break;
  }
}

console.log(answer);