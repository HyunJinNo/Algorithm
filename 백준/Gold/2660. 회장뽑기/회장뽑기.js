const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 회원의 수, 1 <= N <= 50
const arr = Array.from({ length: N + 1 }, () => Array(N + 1).fill(50));
let index = 1;

while (true) {
  const [a, b] = input[index++].split(" ").map(Number);

  if (a === -1 && b === -1) {
    break;
  }

  arr[a][b] = 1;
  arr[b][a] = 1;
}

for (let m = 1; m <= N; m++) {
  for (let s = 1; s <= N; s++) {
    for (let e = 1; e <= N; e++) {
      if (s === e) {
        arr[s][e] = 0;
      } else {
        arr[s][e] = Math.min(arr[s][e], arr[s][m] + arr[m][e]);
      }
    }
  }
}

const scores = Array(N + 1).fill(0);
const candidates = [];
let minScore = 50;

for (let i = 1; i <= N; i++) {
  scores[i] = Math.max(...arr[i].slice(1));
  minScore = Math.min(minScore, scores[i]);
}

for (let i = 1; i <= N; i++) {
  if (scores[i] === minScore) {
    candidates.push(i);
  }
}

const temp = [...new Set(scores.slice(1))];
temp.sort((a, b) => a - b);

console.log(`${minScore} ${candidates.length}`);
console.log(candidates.join(" "));