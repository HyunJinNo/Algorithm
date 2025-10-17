const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

const N = Number(input[0]); // 재료의 개수, 1 <= N <= 10
const graph = Array.from({ length: N }, () => []);

for (let i = 1; i < N; i++) {
  // 1 <= p <= 9
  // 1 <= q <= 9
  const [a, b, p, q] = input[i].split(" ").map(Number);
  graph[a].push([b, p, q]);
  graph[b].push([a, q, p]);
}

const arr = Array.from({ length: N }, () => [0, 0]);
const visited = new Int8Array(N).fill(false);
const stack = [0];
arr[0] = [1, 1];
visited[0] = true;

while (stack.length > 0) {
  const node = stack.pop();

  graph[node].forEach(([nextNode, p, q]) => {
    if (!visited[nextNode]) {
      visited[nextNode] = true;
      stack.push(nextNode);

      arr[nextNode][0] = arr[node][0] * q;
      arr[nextNode][1] = arr[node][1] * p;
    }
  });
}

let temp = (arr[0][1] * arr[1][1]) / gcd(Math.max(arr[0][1], arr[1][1]), Math.min(arr[0][1], arr[1][1]));
for (let i = 1; i < N; i++) {
  temp = (temp * arr[i][1]) / gcd(Math.max(temp, arr[i][1]), Math.min(temp, arr[i][1]));
}

const answer = [];
for (let i = 0; i < N; i++) {
  answer.push((arr[i][0] * temp) / arr[i][1]);
}

let temp1 = gcd(Math.max(answer[0]), Math.min(answer[1]));
for (let i = 2; i < N; i++) {
  temp1 = gcd(Math.max(temp1, answer[i]), Math.min(temp1, answer[i]));
}

for (let i = 0; i < N; i++) {
  answer[i] /= temp1;
}

console.log(answer.join(" ").trim());