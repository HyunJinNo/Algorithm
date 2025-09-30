const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 테스트 케이스의 개수
let index = 1;
let answer = "";

for (let iter = 1; iter <= n; iter++) {
  const m = Number(input[index++]); // 경기의 수, 1 <= m <= 50_000
  const arr = [];

  for (let iter2 = 0; iter2 < m; iter2++) {
    arr.push(input[index++].split(" ").map(Number));
  }

  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[2] - b[2];
    }
  });

  let result = 0;
  let currentDay = 0;
  let currentTime = 0;

  for (let i = 0; i < m; i++) {
    const [d, s, e] = arr[i];

    if (currentDay !== d) {
      currentDay = d;
      currentTime = 0;
    }

    if (currentTime <= s) {
      result++;
      currentTime = e;
    }
  }

  answer += `Scenario #${iter}:\n${result}\n\n`;
}

console.log(answer.trim());