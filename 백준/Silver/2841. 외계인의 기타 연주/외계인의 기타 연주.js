const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 멜로디에 포함되어 있는 음의 수, 1 <= N <= 500_000
// P: 한 줄에 있는 프렛의 수, 2 <= P <= 300_000
const [N, P] = input[0].split(" ").map(Number);
const stackList = Array.from({ length: N + 1 }, () => []);
let answer = 0;

for (let i = 1; i <= N; i++) {
  // a: 줄의 번호, 1 <= a <= N
  // b: 그 줄에서 눌러야 하는 프렛의 번호, 1 <= b <= P
  const [a, b] = input[i].split(" ").map(Number);

  while (stackList[a].length > 0 && stackList[a][stackList[a].length - 1] > b) {
    stackList[a].pop();
    answer++;
  }

  if (stackList[a].length === 0 || stackList[a][stackList[a].length - 1] < b) {
    stackList[a].push(b);
    answer++;
  }
}

console.log(answer);