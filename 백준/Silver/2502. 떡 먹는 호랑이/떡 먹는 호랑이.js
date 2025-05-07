const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

// D: 할머니가 넘어온 날, 3 <= D <= 30
// K: 그 날 호랑이에게 준 떡의 개수, 10 <= K <= 100_000
const [D, K] = input.split(" ").map(Number);
let [x1, y1] = [1, 0];
let [x2, y2] = [0, 1];

for (let day = 3; day <= D; day++) {
  const temp1 = x2;
  const temp2 = y2;

  x2 += x1;
  y2 += y1;
  x1 = temp1;
  y1 = temp2;
}

let A = 1;

while ((K - A * x2) % y2 !== 0) {
  A++;
}

console.log(A);
console.log((K - A * x2) / y2);
