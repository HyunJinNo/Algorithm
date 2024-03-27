const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 재료의 개수, 1 <= n <= 10
const ingredients = [];
for (let i = 1; i <= n; i++) {
  const [s, b] = input[i].split(" ").map(Number);
  ingredients.push([s, b]);
}

const solve = (index, s, b) => {
  if (index >= n) {
    return Math.abs(s - b);
  }

  // [index]번째 재료를 사용하지 않는 경우
  let result = solve(index + 1, s, b);
  
  // [index]번째 재료를 사용하는 경우
  s *= ingredients[index][0];
  b += ingredients[index][1];
  result = Math.min(result, solve(index + 1, s, b));

  return result;
}

let answer = Infinity;
for (let i = 0; i < ingredients.length; i++) {
  answer = Math.min(answer, solve(i + 1, ingredients[i][0], ingredients[i][1]));
}
console.log(answer);