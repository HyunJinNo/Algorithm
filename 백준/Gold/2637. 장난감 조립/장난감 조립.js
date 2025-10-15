const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 완제품의 번호, 3 <= N <= 100
const M = Number(input[1]); // 부품들 간의 관계의 수, 3 <= M <= 100

const graph = Array.from({ length: N + 1 }, () => []);
const inDegree = Array(N + 1).fill(0);

for (let i = 2; i < 2 + M; i++) {
  // "중간 부품이나 완제품 X를 만드는데 중간 부품 혹은 기본 부품 Y가 K개 필요하다"
  const [X, Y, K] = input[i].split(" ").map(Number);
  graph[Y].push([X, K]);
  inDegree[X]++;
}

const queue = [];
let peekIndex = 0;
const arr = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i < N; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
    arr[i][i] = 1;
  }
}

while (peekIndex < queue.length) {
  const node = queue[peekIndex++];

  graph[node].forEach(([X, K]) => {
    for (let i = 1; i < N; i++) {
      arr[X][i] += arr[node][i] * K;
    }

    inDegree[X]--;

    if (inDegree[X] === 0) {
      queue.push(X);
    }
  });
}

let answer = "";

for (let i = 1; i < N; i++) {
  if (arr[N][i] !== 0) {
    answer += `${i} ${arr[N][i]}\n`;
  }
}
console.log(answer.trim());