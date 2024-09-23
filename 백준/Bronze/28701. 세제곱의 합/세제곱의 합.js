const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 5 <= N <= 100
const arr = Array.from({ length: N }, (_, k) => k + 1);

console.log(arr.reduce((total, current) => total + current, 0));
console.log(
  Math.pow(
    arr.reduce((total, current) => total + current, 0),
    2
  )
);
console.log(arr.reduce((total, current) => total + Math.pow(current, 3), 0));
