const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 숫자 카드의 개수, 1 <= N <= 100_000
const map = new Map();
let answer = 0n;
let count = 0;

for (let i = 1; i <= N; i++) {
  const num = BigInt(input[i]);
  map.set(num, (map.get(num) ?? 0n) + 1n);
}

for (let [key, value] of map) {
  if (count < value) {
    answer = key;
    count = value;
  } else if (count === value && answer > key) {
    answer = key;
  }
}

console.log(answer.toString());
