const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 물웅덩이의 개수, 1 <= N <= 10_000
// L: 널빤지의 길이, 1 <= L <= 1_000_000
const [N, L] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  const temp = input[i].split(" ").map(Number);
  arr.push(temp);
}

arr.sort((a, b) => a[0] - b[0]);
let answer = 0;

for (let i = 0; i < N; i++) {
  answer += Math.ceil((arr[i][1] - arr[i][0]) / L);

  if (i + 1 < N) {
    arr[i + 1][0] = Math.max(arr[i + 1][0], arr[i][0] + Math.ceil((arr[i][1] - arr[i][0]) / L) * L);
  }
}

console.log(answer);