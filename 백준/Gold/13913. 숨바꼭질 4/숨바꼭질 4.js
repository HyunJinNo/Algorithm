const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString().split(" ");

// n: 수빈이가 있는 위치, 0 <= n <= 100,000
// k: 동생이 있는 위치, 0 <= k <= 100,000
const [n, k] = input.map(Number);
const visited = new Array(100001).fill(false);
const queue = [];
let moves = "";

visited[n] = true;
queue.push([n, `${n}`]); // [currentPos, moves]

while (true) {
  const data = queue.shift();
  if (data === undefined) {
    break;
  }

  if (data[0] === k) {
    moves = data[1];
    break;
  }

  if (data[0] - 1 >= 0 && !visited[data[0] - 1]) {
    visited[data[0] - 1] = true;
    queue.push([data[0] - 1, data[1] + ` ${data[0] - 1}`]);
  }
  if (data[0] < k && data[0] + 1 <= 100000 && !visited[data[0] + 1]) {
    visited[data[0] + 1] = true;
    queue.push([data[0] + 1, data[1] + ` ${data[0] + 1}`]);
  }
  if (data[0] < k && data[0] * 2 <= 100000 && !visited[data[0] * 2]) {
    visited[data[0] * 2] = true;
    queue.push([data[0] * 2, data[1] + ` ${data[0] * 2}`]);
  }
}

const result = moves.split(" ").map(Number);
console.log(result.length - 1);
console.log(moves);