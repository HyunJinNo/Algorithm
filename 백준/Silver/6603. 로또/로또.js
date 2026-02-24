const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;
let answer = "";

while (true) {
  const arr = input[index++].split(" ").map(Number);

  if (arr[0] === 0) {
    console.log(answer.trim());
    break;
  }

  const k = arr[0]; // 6 < k < 13
  const visited = new Int8Array(Array(k + 1).fill(false));

  const solution = (arrIndex, depth) => {
    if (depth === 6) {
      let temp = "";

      for (let i = 1; i <= k; i++) {
        if (visited[i]) {
          temp += `${arr[i]} `;
        }
      }

      answer += `${temp.trim()}\n`;
      return;
    } else if (arrIndex > k) {
      return;
    }

    if (!visited[arrIndex]) {
      visited[arrIndex] = true;
      solution(arrIndex + 1, depth + 1);
      visited[arrIndex] = false;
    }

    solution(arrIndex + 1, depth);
  };

  solution(1, 0);
  answer += "\n";
}