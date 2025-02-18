const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]);
let index = 1;

for (let i = 0; i < T; i++) {
  const N = Number(input[index++]);
  const arr = [];
  let result = 0;
  let current = N + 1;

  for (let j = 0; j < N; j++) {
    arr.push(input[index++].split(" ").map(Number));
  }

  arr.sort((a, b) => a[0] - b[0]);

  arr.forEach((value) => {
    if (value[1] < current) {
      result++;
      current = value[1];
    }
  });

  console.log(result);
}
