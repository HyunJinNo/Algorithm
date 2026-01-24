const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;
let answer = "";

while (true) {
  const n = Number(input[index++]); // 집합 S의 크기, 1 <= n <= 1_000

  if (n === 0) {
    console.log(answer.trim());
    break;
  }

  const S = new Int32Array(n);

  for (let i = 0; i < n; i++) {
    S[i] = Number(input[index++]); // -536_870_912 <= S[i] <= 536_870_911
  }

  const abSum = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }

      const sum = S[i] + S[j]; // a + b

      if (!abSum.has(sum)) {
        abSum.set(sum, []);
      }
      abSum.get(sum).push([i, j]);
    }
  }

  let result = -Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }

      const diff = S[i] - S[j]; // d - c

      if (abSum.has(diff)) {
        for (const [aIndex, bIndex] of abSum.get(diff)) {
          if (aIndex !== i && aIndex !== j && bIndex !== i && bIndex !== j) {
            result = Math.max(result, S[i]);
          }
        }
      }
    }
  }

  answer += `${result === -Infinity ? "no solution" : result}\n`;
}