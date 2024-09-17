const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const pos = input.map((pos) => pos.trim().split(" ").map(Number));
const visited = Array(4).fill(false);

const solve = (x, y) => {
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= 3; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result = Math.min(
        result,
        Math.sqrt(
          (pos[i][0] - x) * (pos[i][0] - x) + (pos[i][1] - y) * (pos[i][1] - y)
        ) + solve(pos[i][0], pos[i][1])
      );
      visited[i] = false;
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};

console.log(parseInt(solve(pos[0][0], pos[0][1])));
