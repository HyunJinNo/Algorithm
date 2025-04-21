const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 집의 수, K <= N <= 50
// K: 대피소의 수, 1 <= K <= 3
const [N, K] = input[0].split(" ").map(Number);
const pos = [];
const distance = Array.from({ length: N }, () => Array(N).fill(0));
let answer = 100_001;

for (let i = 1; i <= N; i++) {
  pos.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const temp =
      Math.abs(pos[i][0] - pos[j][0]) + Math.abs(pos[i][1] - pos[j][1]);
    distance[i][j] = temp;
    distance[j][i] = temp;
  }
}

/**
 * @param {number} index
 * @param {number[]} shelter
 */
const solution = (index, shelter) => {
  if (shelter.length === K) {
    let result = 0;

    for (let i = 0; i < N; i++) {
      if (!shelter.includes(i)) {
        let temp = 100_001;

        for (let j = 0; j < K; j++) {
          temp = Math.min(temp, distance[i][shelter[j]]);
        }

        result = Math.max(result, temp);
      }
    }

    answer = Math.min(answer, result);
    return;
  } else if (index >= N) {
    return;
  }

  solution(index + 1, shelter);

  shelter.push(index);
  solution(index + 1, shelter);
  shelter.pop();
};

solution(0, []);
console.log(answer);
