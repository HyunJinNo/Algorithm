const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 10
let index = 1;

for (let iter = 0; iter < T; iter++) {
  const n = Number(input[index++]); // 의상의 수, 0 <= n <= 30
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const arr = input[index++].trim().split(" ");
    map.set(arr[1], (map.get(arr[1]) ?? 0) + 1);
  }

  let answer = 1;
  for (const value of map.values()) {
    answer *= value + 1;
  }
  console.log(answer - 1);
}