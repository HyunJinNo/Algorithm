const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
let X = input.trim();
let count = 0;

while (X.length > 1) {
  let sum = 0;

  for (let i = 0; i < X.length; i++) {
    sum += Number(X[i]);
  }

  X = sum.toString();
  count++;
}

console.log(count);
console.log(Number(X) % 3 === 0 ? "YES" : "NO");