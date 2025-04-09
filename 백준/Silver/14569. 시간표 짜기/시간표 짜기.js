const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 총 과목의 수, 3 <= N <= 1_000
const classList = [];

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map(Number);
  const k = arr[0]; // 수업 시간의 수, 4 <= k <= 50
  let num = 0n;

  for (let j = 1; j <= k; j++) {
    num |= 1n << BigInt(arr[j] - 1);
  }
  classList.push(num);
}

const M = Number(input[N + 1]); // 학생의 수, 1 <= M <= 10_000
let result = "";

for (let i = N + 2; i < N + M + 2; i++) {
  const arr = input[i].split(" ").map(Number);
  const p = arr[0]; // 비어 있는 교시 개수, 0 <= p <= 50
  let num = 0n;

  for (let j = 1; j <= p; j++) {
    num |= 1n << BigInt(arr[j] - 1);
  }

  const count = classList.reduce((total, current) => {
    if ((current & num) === current) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  result += `${count}\n`;
}

console.log(result.trim());
