const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const T = Number(input[0]); // 테스트 케이스의 수
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  const n = Number(input[index++]); // 2 <= n <= 8
  const bob = input[index++].trim().split("");
  const alice = input[index++].trim().split("");
  const minValue = Math.min(Number(bob.join("")), Number(bob.reverse().join("")));
  const visited = Array(n).fill(false);
  let result = 0;

  const solve = (str) => {
    if (Number(str) < minValue) {
      result = Math.max(result, Number(str));
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        solve(str + alice[i]);
        visited[i] = false;
      }
    }
  };

  solve("");
  answer += `${result}\n`;
}

console.log(answer.trim());