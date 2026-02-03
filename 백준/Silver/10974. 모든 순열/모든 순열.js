const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();

const N = Number(input); // 1 <= N <= 8
const arr = new Int8Array(N);
const visited = new Int8Array(N + 1).fill(false);
let answer = "";

const solution = (index) => {
  if (index === N) {
    answer += `${arr.join(" ")}\n`;
    return;
  }

  for (let num = 1; num <= N; num++) {
    if (!visited[num]) {
      visited[num] = true;
      arr[index] = num;
      solution(index + 1);
      visited[num] = false;
    }
  }
};

solution(0);
console.log(answer.trim());