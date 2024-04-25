const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: string = require("fs").readFileSync(path).toString();
const R = Number(input); // 반지름, 1 <= R <= 10_000

console.log(Math.PI * R * R);
console.log(R * R * 2);
