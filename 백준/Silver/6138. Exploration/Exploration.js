const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// T: 일몰 시간, 1 <= T <= 1_000_000_000
// N: 랜드마크의 수, 1 <= N <= 50_000
const [T, N] = input[0].trim().split(" ").map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => {
  if (Math.abs(a) > Math.abs(b)) {
    return 1;
  } else {
    return -1;
  }
});

let time = 0;
let current = 0;
let answer = 0;

for (let num of arr) {
  if (time + Math.abs(num - current) <= T) {
    answer++;
    time += Math.abs(num - current);
    current = num;
  } else {
    break;
  }
}

console.log(answer);
