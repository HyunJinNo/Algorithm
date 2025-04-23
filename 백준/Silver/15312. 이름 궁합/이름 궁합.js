const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const temp = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 3,
  F: 3,
  G: 2,
  H: 3,
  I: 3,
  J: 2,
  K: 2,
  L: 1,
  M: 2,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V: 1,
  W: 1,
  X: 2,
  Y: 2,
  Z: 1,
};

const A = input[0].trim();
const B = input[1].trim();
const length = A.length;

const arr = Array.from({ length: length * 2 }, () => []);
for (let i = 0; i < length; i++) {
  arr[0].push(temp[A[i]]);
  arr[0].push(temp[B[i]]);
}

for (let i = 0; i < length * 2 - 2; i++) {
  for (let j = 0; j < length * 2 - i - 1; j++) {
    arr[i + 1].push((arr[i][j] + arr[i][j + 1]) % 10);
  }
}

console.log(`${arr[length * 2 - 2][0]}${arr[length * 2 - 2][1]}`);
