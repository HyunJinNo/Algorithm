const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 점의 개수, 1 <= N <= 200_000
// K: 너비, 1 <= K <= 20_000
const [N, K] = input[0].split(" ").map(Number);
const distanceList = [];

for (let i = 1; i <= N; i++) {
  // -10_000 <= x <= 10_000
  // -10_000 <= y <= 10_000
  const [x, y] = input[i].split(" ").map(Number);
  distanceList.push(Math.sqrt(x * x + y * y));
}

distanceList.sort((a, b) => a - b);

let endIndex = 0;

for (let i = 0; i < N; i++) {
  if (distanceList[i] > distanceList[0] + K) {
    endIndex = i - 1;
    break;
  }
}

let answer = (100 * (endIndex + 1)) / N;

for (let startIndex = 1; startIndex < N; startIndex++) {
  while (endIndex < N) {
    if (distanceList[endIndex] > distanceList[startIndex] + K) {
      endIndex--;
      break;
    } else if (endIndex + 1 === N) {
      break;
    }

    endIndex++;
  }

  answer = Math.max(answer, (100 * (endIndex - startIndex + 1)) / N);
}

console.log(answer);