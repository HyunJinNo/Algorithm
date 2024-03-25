const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 집의 수, 2 <= n <= 1,000
const cache = Array.from(Array(n), () => Array.from(Array(3), () => new Array(3).fill(-1)));
const cost = [];
for (let i = 1; i <= n; i++) {
  cost.push(input[i].split(" ").map(Number));
}

const solve = (index, color, firstColor) => {
  if (index === n - 1) {
    if (color !== firstColor) {
      cache[index][color][firstColor] = cost[index][color];
    } else {
      cache[index][color][firstColor] = 987654321;
    }
    return cache[index][color][firstColor];
  } else if (cache[index][color][firstColor] !== -1) {
    return cache[index][color][firstColor];
  }

  let result = 987654321;
  switch (color) {
    case 0:
      result = Math.min(result, cost[index][color] + solve(index + 1, 1, firstColor));
      result = Math.min(result, cost[index][color] + solve(index + 1, 2, firstColor));
      break;
    case 1:
      result = Math.min(result, cost[index][color] + solve(index + 1, 0, firstColor));
      result = Math.min(result, cost[index][color] + solve(index + 1, 2, firstColor));
      break;
    default: // case 2
      result = Math.min(result, cost[index][color] + solve(index + 1, 0, firstColor));
      result = Math.min(result, cost[index][color] + solve(index + 1, 1, firstColor));
  }

  cache[index][color][firstColor] = result;
  return cache[index][color][firstColor];
};

let result = solve(0, 0, 0);
result = Math.min(result, solve(0, 1, 1));
result = Math.min(result, solve(0, 2, 2));
console.log(result);