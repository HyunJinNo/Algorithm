const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 사람의 수, 1 <= N <= 100_000
const arr = [];

for (let i = 1; i <= N; i++) {
  const temp = input[i].split(" ");
  const A = temp[0];
  const B = Number(temp[1]);

  arr.push([A, B]);
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else {
    return a[0].localeCompare(b[0]);
  }
});

console.log(arr[0][0]);