const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 재학생의 수, 1 <= N <= 100
const arr = input[1].split(" ").map(Number);
const count = [0, 0, 0]; // [찬성 수, 반대 수, 기권 수]

for (let i = 0; i < N; i++) {
  switch (arr[i]) {
    case 1:
      count[0]++;
      break;
    case -1:
      count[1]++;
      break;
    default:
      count[2]++;
      break;
  }
}

if (count[2] >= Math.ceil(N / 2)) {
  console.log("INVALID");
} else {
  console.log(count[0] > count[1] ? "APPROVED" : "REJECTED");
}