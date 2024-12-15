const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 유저의 수, 2 <= N <= 100
// M: 친구 관계의 수, 1 <= M <= 5_000
const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  arr[A][B] = 1;
  arr[B][A] = 1;
}

for (let m = 1; m <= N; m++) {
  for (let s = 1; s <= N; s++) {
    for (let e = 1; e <= N; e++) {
      arr[s][e] = Math.min(arr[s][e], arr[s][m] + arr[m][e]);
    }
  }
}

let answer = 0;
let count = Infinity;

for (let i = 1; i <= N; i++) {
  let temp = arr[i].slice(1).reduce((total, current) => total + current, 0);
  if (temp < count) {
    answer = i;
    count = temp;
  }
}

console.log(answer);
