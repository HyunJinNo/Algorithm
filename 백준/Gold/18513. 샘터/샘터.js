const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N: 샘터의 수
// K: 집의 수
// 1 <= N, K <= 100_000
let [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // -100_000_000 <= arr[i] <= 100_000_000
const visited = new Set(arr);
const queue = [];
let peekIndex = 0;
let answer = 0;

for (const num of arr) {
  if (!visited.has(num - 1)) {
    queue.push([num - 1, 1]);
    visited.add(num - 1);
  }

  if (!visited.has(num + 1)) {
    queue.push([num + 1, 1]);
    visited.add(num + 1);
  }
}

while (K > 0) {
  const [num, value] = queue[peekIndex++];
  answer += value;

  if (!visited.has(num - 1)) {
    queue.push([num - 1, value + 1]);
    visited.add(num - 1);
  }

  if (!visited.has(num + 1)) {
    queue.push([num + 1, value + 1]);
    visited.add(num + 1);
  }

  K--;
}

console.log(answer);