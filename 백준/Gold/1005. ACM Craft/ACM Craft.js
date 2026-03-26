const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  // N: 건물의 개수, 2 <= N <= 1_000
  // K: 건물간의 건설순서 규칙의 총 개수, 1 <= K <= 100_000
  const [N, K] = input[index++].split(" ").map(Number);
  const D = input[index++].split(" ").map(Number); // 1 <= D[i] <= 100_000
  const edges = Array.from({ length: N + 1 }, () => []);
  const inDegree = Array(N + 1).fill(0);
  const time = Array(N + 1).fill(0);

  for (let iter2 = 0; iter2 < K; iter2++) {
    const [X, Y] = input[index++].split(" ").map(Number);
    edges[X].push(Y);
    inDegree[Y]++;
  }

  const W = Number(input[index++]); // 승리하기 위해 건설해야 할 건물의 번호
  const queue = [];
  let peekIndex = 0;

  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      time[i] = D[i - 1];
    }
  }

  if (time[W] !== 0) {
    answer += `${time[W]}\n`;
    continue;
  }

  loop: while (peekIndex < queue.length) {
    const node = queue[peekIndex++];

    for (const nextNode of edges[node]) {
      inDegree[nextNode]--;
      time[nextNode] = Math.max(time[nextNode], time[node] + D[nextNode - 1]);

      if (inDegree[nextNode] === 0) {
        queue.push(nextNode);

        if (nextNode === W) {
          answer += `${time[W]}\n`;
          break loop;
        }
      }
    }
  }
}

console.log(answer.trim());