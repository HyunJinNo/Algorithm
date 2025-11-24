const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 선을 그은 횟수, 1 <= N <= 1_000_000
const arr = input.slice(1, 1 + N).map((str) => str.split(" ").map(Number));
arr.sort((a, b) => a[0] - b[0]);

const lineList = [arr[0]];
let index = 0;

for (let i = 1; i < N; i++) {
  // -1_000_000_000 <= x < y <= 1_000_000_000
  const [x, y] = arr[i];

  if (x <= lineList[index][1]) {
    lineList[index][1] = Math.max(lineList[index][1], y);
  } else {
    lineList.push([x, y]);
    index++;
  }
}

console.log(lineList.reduce((total, current) => total + (current[1] - current[0]), 0));