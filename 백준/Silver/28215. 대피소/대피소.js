const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 집의 수, K <= N <= 50
// K: 대피소의 수, 1 <= K <= 3
const [N, K] = input[0].split(" ").map(Number);
const pos = [];
const distance = Array.from({ length: N }, () => Array(N).fill(0));

for (let i = 1; i <= N; i++) {
  pos.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    distance[i][j] =
      Math.abs(pos[i][0] - pos[j][0]) + Math.abs(pos[i][1] - pos[j][1]);
  }
}

let answer = Number.MAX_SAFE_INTEGER;

switch (K) {
  case 1:
    for (let i = 0; i < N; i++) {
      let result = 0;
      for (let j = 0; j < N; j++) {
        if (i === j) {
          continue;
        }
        result = Math.max(result, distance[i][j]);
      }

      answer = Math.min(answer, result);
    }
    break;
  case 2:
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        let result = 0;
        for (let k = 0; k < N; k++) {
          if (k === i || k === j) {
            continue;
          }
          result = Math.max(result, Math.min(distance[k][i], distance[k][j]));
        }

        answer = Math.min(answer, result);
      }
    }
    break;
  case 3:
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
          let result = 0;
          for (let l = 0; l < N; l++) {
            if (l === i || l === j || l === k) {
              continue;
            }
            result = Math.max(
              result,
              Math.min(distance[l][i], distance[l][j], distance[l][k]),
            );
          }

          answer = Math.min(answer, result);
        }
      }
    }
    break;
  default:
    break;
}

console.log(answer);
