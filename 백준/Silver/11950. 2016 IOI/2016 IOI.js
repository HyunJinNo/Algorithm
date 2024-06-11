const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 세로의 길이, 3 <= N <= 50
// M: 가로의 길이, 3 <= M <= 50
const [N, M] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  const str = input[i].trim();
  arr.push([]);
  for (let j = 0; j < M; j++) {
    switch (str[j]) {
      case "W":
        arr[i - 1].push(0);
        break;
      case "B":
        arr[i - 1].push(1);
        break;
      case "R":
        arr[i - 1].push(2);
        break;
      default:
        break;
    }
  }
}
const cache = Array.from(Array(N), () => Array(3).fill(-1));

const solve = (row, color) => {
  if (cache[row][color] !== -1) {
    return cache[row][color];
  } else if (row === N - 1) {
    if (color !== 2) {
      cache[row][color] = Number.MAX_SAFE_INTEGER;
      return Number.MAX_SAFE_INTEGER;
    } else {
      let count = 0;
      for (let col = 0; col < M; col++) {
        if (arr[row][col] !== 2) {
          count++;
        }
      }
      cache[row][color] = count;
      return count;
    }
  }

  let result = 0;
  for (let col = 0; col < M; col++) {
    if (arr[row][col] !== color) {
      result++;
    }
  }

  if (color < 2) {
    result = Math.min(
      result + solve(row + 1, color),
      result + solve(row + 1, color + 1)
    );
  } else {
    result += solve(row + 1, color);
  }

  cache[row][color] = result;
  return result;
};

console.log(solve(0, 0));
